package com.databasir.core.domain.description.service;

import com.databasir.core.domain.description.converter.DocumentDescriptionPojoConverter;
import com.databasir.core.domain.description.data.DocumentDescriptionSaveRequest;
import com.databasir.core.domain.description.event.DescriptionUpdated;
import com.databasir.core.infrastructure.event.EventPublisher;
import com.databasir.dao.impl.DocumentDescriptionDao;
import com.databasir.dao.tables.pojos.DocumentDescriptionPojo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class DocumentDescriptionService {

    private final DocumentDescriptionDao documentDescriptionDao;

    private final DocumentDescriptionPojoConverter documentDescriptionPojoConverter;

    private final EventPublisher eventPublisher;

    @Transactional
    public void save(Integer groupId,
                     Integer projectId,
                     Integer userId,
                     DocumentDescriptionSaveRequest request) {

        DocumentDescriptionPojo pojo = documentDescriptionPojoConverter.of(projectId, userId, request);
        if (!documentDescriptionDao.exists(projectId, request.getTableName(), request.getColumnName())) {
            documentDescriptionDao.insertAndReturnId(pojo);
        } else {
            documentDescriptionDao.update(pojo);
        }
        DescriptionUpdated event = DescriptionUpdated.builder()
                .tableName(request.getTableName())
                .columnName(request.getColumnName())
                .description(request.getContent())
                .userId(userId)
                .projectId(projectId)
                .groupId(groupId)
                .build();
        eventPublisher.publish(event);
    }
}
