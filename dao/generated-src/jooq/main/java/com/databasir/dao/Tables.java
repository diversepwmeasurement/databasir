/*
 * This file is generated by jOOQ.
 */
package com.databasir.dao;


import com.databasir.dao.tables.DataSource;
import com.databasir.dao.tables.DataSourceProperty;
import com.databasir.dao.tables.DatabaseDocument;
import com.databasir.dao.tables.DatabaseType;
import com.databasir.dao.tables.DocumentDescription;
import com.databasir.dao.tables.DocumentDiscussion;
import com.databasir.dao.tables.DocumentTemplateProperty;
import com.databasir.dao.tables.Group;
import com.databasir.dao.tables.Login;
import com.databasir.dao.tables.OauthApp;
import com.databasir.dao.tables.OperationLog;
import com.databasir.dao.tables.Project;
import com.databasir.dao.tables.ProjectSyncRule;
import com.databasir.dao.tables.SysKey;
import com.databasir.dao.tables.SysMail;
import com.databasir.dao.tables.TableColumnDocument;
import com.databasir.dao.tables.TableDocument;
import com.databasir.dao.tables.TableForeignKeyDocument;
import com.databasir.dao.tables.TableIndexDocument;
import com.databasir.dao.tables.TableTriggerDocument;
import com.databasir.dao.tables.User;
import com.databasir.dao.tables.UserFavoriteProject;
import com.databasir.dao.tables.UserRole;


/**
 * Convenience access to all tables in databasir.
 */
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class Tables {

    /**
     * The table <code>databasir.data_source</code>.
     */
    public static final DataSource DATA_SOURCE = DataSource.DATA_SOURCE;

    /**
     * The table <code>databasir.data_source_property</code>.
     */
    public static final DataSourceProperty DATA_SOURCE_PROPERTY = DataSourceProperty.DATA_SOURCE_PROPERTY;

    /**
     * The table <code>databasir.database_document</code>.
     */
    public static final DatabaseDocument DATABASE_DOCUMENT = DatabaseDocument.DATABASE_DOCUMENT;

    /**
     * customer database types
     */
    public static final DatabaseType DATABASE_TYPE = DatabaseType.DATABASE_TYPE;

    /**
     * custom document description
     */
    public static final DocumentDescription DOCUMENT_DESCRIPTION = DocumentDescription.DOCUMENT_DESCRIPTION;

    /**
     * The table <code>databasir.document_discussion</code>.
     */
    public static final DocumentDiscussion DOCUMENT_DISCUSSION = DocumentDiscussion.DOCUMENT_DISCUSSION;

    /**
     * template property
     */
    public static final DocumentTemplateProperty DOCUMENT_TEMPLATE_PROPERTY = DocumentTemplateProperty.DOCUMENT_TEMPLATE_PROPERTY;

    /**
     * The table <code>databasir.group</code>.
     */
    public static final Group GROUP = Group.GROUP;

    /**
     * The table <code>databasir.login</code>.
     */
    public static final Login LOGIN = Login.LOGIN;

    /**
     * oauth app info
     */
    public static final OauthApp OAUTH_APP = OauthApp.OAUTH_APP;

    /**
     * The table <code>databasir.operation_log</code>.
     */
    public static final OperationLog OPERATION_LOG = OperationLog.OPERATION_LOG;

    /**
     * The table <code>databasir.project</code>.
     */
    public static final Project PROJECT = Project.PROJECT;

    /**
     * The table <code>databasir.project_sync_rule</code>.
     */
    public static final ProjectSyncRule PROJECT_SYNC_RULE = ProjectSyncRule.PROJECT_SYNC_RULE;

    /**
     * The table <code>databasir.sys_key</code>.
     */
    public static final SysKey SYS_KEY = SysKey.SYS_KEY;

    /**
     * The table <code>databasir.sys_mail</code>.
     */
    public static final SysMail SYS_MAIL = SysMail.SYS_MAIL;

    /**
     * The table <code>databasir.table_column_document</code>.
     */
    public static final TableColumnDocument TABLE_COLUMN_DOCUMENT = TableColumnDocument.TABLE_COLUMN_DOCUMENT;

    /**
     * The table <code>databasir.table_document</code>.
     */
    public static final TableDocument TABLE_DOCUMENT = TableDocument.TABLE_DOCUMENT;

    /**
     * The table <code>databasir.table_foreign_key_document</code>.
     */
    public static final TableForeignKeyDocument TABLE_FOREIGN_KEY_DOCUMENT = TableForeignKeyDocument.TABLE_FOREIGN_KEY_DOCUMENT;

    /**
     * The table <code>databasir.table_index_document</code>.
     */
    public static final TableIndexDocument TABLE_INDEX_DOCUMENT = TableIndexDocument.TABLE_INDEX_DOCUMENT;

    /**
     * The table <code>databasir.table_trigger_document</code>.
     */
    public static final TableTriggerDocument TABLE_TRIGGER_DOCUMENT = TableTriggerDocument.TABLE_TRIGGER_DOCUMENT;

    /**
     * The table <code>databasir.user</code>.
     */
    public static final User USER = User.USER;

    /**
     * The table <code>databasir.user_favorite_project</code>.
     */
    public static final UserFavoriteProject USER_FAVORITE_PROJECT = UserFavoriteProject.USER_FAVORITE_PROJECT;

    /**
     * The table <code>databasir.user_role</code>.
     */
    public static final UserRole USER_ROLE = UserRole.USER_ROLE;
}
