CREATE TABLE document_full_text
(
    id                          INT PRIMARY KEY AUTO_INCREMENT,
    `group_id`                  INT       NOT NULL COMMENT 'ref to group.id',
    `project_id`                INT COMMENT 'ref to project.id, may null',
    `database_document_id`      INT COMMENT 'ref to database_document.id, may null',
    `database_document_version` INT COMMENT 'rf to database_document.version, may null',
    `table_document_id`         INT COMMENT 'ref to table_document.id, may null',
    `table_column_document_id`  INT COMMENT 'ref to table_column_document.id, may null',
    `group_name`                VARCHAR(255),
    `group_description`         VARCHAR(512),
    `project_name`              VARCHAR(255),
    `project_description`       TEXT,
    `database_name`             TEXT,
    `schema_name`               TEXT,
    `database_product_name`     TEXT,
    `database_type`             TEXT,
    `table_name`                TEXT,
    `table_comment`             TEXT,
    `table_description`         TEXT,
    `col_name`                  TEXT,
    `col_comment`               TEXT,
    `col_description`           TEXT,
    update_at                   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    create_at                   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX IDX_GROUP_ID (group_id),
    INDEX IDX_PROJECT_ID (project_id),
    INDEX IDX_TABLE_DOCUMENT_ID (table_document_id),
    FULLTEXT FIDX_COLUMN (col_name, col_comment, col_description, database_product_name) WITH PARSER ngram,
    FULLTEXT FIDX_TABLE (`table_name`, table_comment, table_description, database_product_name) WITH PARSER ngram,
    FULLTEXT FIDX_PROJECT (project_name, project_description, SCHEMA_NAME, database_name,
                           database_type) WITH PARSER ngram,
    FULLTEXT FIDX_GROUP (group_name, group_description) WITH PARSER ngram
) CHARSET utf8mb4
  COLLATE utf8mb4_unicode_ci;