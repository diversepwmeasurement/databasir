/*
 * This file is generated by jOOQ.
 */
package com.databasir.dao.tables;


import com.databasir.dao.Databasir;
import com.databasir.dao.Indexes;
import com.databasir.dao.Keys;
import com.databasir.dao.tables.records.TableTriggerDocumentRecord;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import org.jooq.Field;
import org.jooq.ForeignKey;
import org.jooq.Identity;
import org.jooq.Index;
import org.jooq.Name;
import org.jooq.Record;
import org.jooq.Row9;
import org.jooq.Schema;
import org.jooq.Table;
import org.jooq.TableField;
import org.jooq.TableOptions;
import org.jooq.UniqueKey;
import org.jooq.impl.DSL;
import org.jooq.impl.SQLDataType;
import org.jooq.impl.TableImpl;


/**
 * This class is generated by jOOQ.
 */
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TableTriggerDocumentTable extends TableImpl<TableTriggerDocumentRecord> {

    private static final long serialVersionUID = 1L;

    /**
     * The reference instance of <code>databasir.table_trigger_document</code>
     */
    public static final TableTriggerDocumentTable TABLE_TRIGGER_DOCUMENT = new TableTriggerDocumentTable();

    /**
     * The class holding records for this type
     */
    @Override
    public Class<TableTriggerDocumentRecord> getRecordType() {
        return TableTriggerDocumentRecord.class;
    }

    /**
     * The column <code>databasir.table_trigger_document.id</code>.
     */
    public final TableField<TableTriggerDocumentRecord, Integer> ID = createField(DSL.name("id"), SQLDataType.INTEGER.nullable(false).identity(true), this, "");

    /**
     * The column <code>databasir.table_trigger_document.name</code>.
     */
    public final TableField<TableTriggerDocumentRecord, String> NAME = createField(DSL.name("name"), SQLDataType.VARCHAR(1024).nullable(false).defaultValue(DSL.inline("", SQLDataType.VARCHAR)), this, "");

    /**
     * The column
     * <code>databasir.table_trigger_document.table_document_id</code>.
     */
    public final TableField<TableTriggerDocumentRecord, Integer> TABLE_DOCUMENT_ID = createField(DSL.name("table_document_id"), SQLDataType.INTEGER.nullable(false), this, "");

    /**
     * The column
     * <code>databasir.table_trigger_document.database_document_id</code>.
     */
    public final TableField<TableTriggerDocumentRecord, Integer> DATABASE_DOCUMENT_ID = createField(DSL.name("database_document_id"), SQLDataType.INTEGER.nullable(false), this, "");

    /**
     * The column <code>databasir.table_trigger_document.timing</code>.
     */
    public final TableField<TableTriggerDocumentRecord, String> TIMING = createField(DSL.name("timing"), SQLDataType.VARCHAR(64).nullable(false), this, "");

    /**
     * The column <code>databasir.table_trigger_document.manipulation</code>.
     */
    public final TableField<TableTriggerDocumentRecord, String> MANIPULATION = createField(DSL.name("manipulation"), SQLDataType.VARCHAR(128).nullable(false), this, "");

    /**
     * The column <code>databasir.table_trigger_document.statement</code>.
     */
    public final TableField<TableTriggerDocumentRecord, String> STATEMENT = createField(DSL.name("statement"), SQLDataType.CLOB.nullable(false), this, "");

    /**
     * The column
     * <code>databasir.table_trigger_document.trigger_create_at</code>.
     */
    public final TableField<TableTriggerDocumentRecord, String> TRIGGER_CREATE_AT = createField(DSL.name("trigger_create_at"), SQLDataType.VARCHAR(255).nullable(false), this, "");

    /**
     * The column <code>databasir.table_trigger_document.create_at</code>.
     */
    public final TableField<TableTriggerDocumentRecord, LocalDateTime> CREATE_AT = createField(DSL.name("create_at"), SQLDataType.LOCALDATETIME(0).nullable(false).defaultValue(DSL.field("CURRENT_TIMESTAMP", SQLDataType.LOCALDATETIME)), this, "");

    private TableTriggerDocumentTable(Name alias, Table<TableTriggerDocumentRecord> aliased) {
        this(alias, aliased, null);
    }

    private TableTriggerDocumentTable(Name alias, Table<TableTriggerDocumentRecord> aliased, Field<?>[] parameters) {
        super(alias, null, aliased, parameters, DSL.comment(""), TableOptions.table());
    }

    /**
     * Create an aliased <code>databasir.table_trigger_document</code> table
     * reference
     */
    public TableTriggerDocumentTable(String alias) {
        this(DSL.name(alias), TABLE_TRIGGER_DOCUMENT);
    }

    /**
     * Create an aliased <code>databasir.table_trigger_document</code> table
     * reference
     */
    public TableTriggerDocumentTable(Name alias) {
        this(alias, TABLE_TRIGGER_DOCUMENT);
    }

    /**
     * Create a <code>databasir.table_trigger_document</code> table reference
     */
    public TableTriggerDocumentTable() {
        this(DSL.name("table_trigger_document"), null);
    }

    public <O extends Record> TableTriggerDocumentTable(Table<O> child, ForeignKey<O, TableTriggerDocumentRecord> key) {
        super(child, key, TABLE_TRIGGER_DOCUMENT);
    }

    @Override
    public Schema getSchema() {
        return aliased() ? null : Databasir.DATABASIR;
    }

    @Override
    public List<Index> getIndexes() {
        return Arrays.asList(Indexes.TABLE_TRIGGER_DOCUMENT_IDX_DATABASE_DOCUMENT_ID, Indexes.TABLE_TRIGGER_DOCUMENT_IDX_TABLE_DOCUMENT_ID);
    }

    @Override
    public Identity<TableTriggerDocumentRecord, Integer> getIdentity() {
        return (Identity<TableTriggerDocumentRecord, Integer>) super.getIdentity();
    }

    @Override
    public UniqueKey<TableTriggerDocumentRecord> getPrimaryKey() {
        return Keys.KEY_TABLE_TRIGGER_DOCUMENT_PRIMARY;
    }

    @Override
    public TableTriggerDocumentTable as(String alias) {
        return new TableTriggerDocumentTable(DSL.name(alias), this);
    }

    @Override
    public TableTriggerDocumentTable as(Name alias) {
        return new TableTriggerDocumentTable(alias, this);
    }

    /**
     * Rename this table
     */
    @Override
    public TableTriggerDocumentTable rename(String name) {
        return new TableTriggerDocumentTable(DSL.name(name), null);
    }

    /**
     * Rename this table
     */
    @Override
    public TableTriggerDocumentTable rename(Name name) {
        return new TableTriggerDocumentTable(name, null);
    }

    // -------------------------------------------------------------------------
    // Row9 type methods
    // -------------------------------------------------------------------------

    @Override
    public Row9<Integer, String, Integer, Integer, String, String, String, String, LocalDateTime> fieldsRow() {
        return (Row9) super.fieldsRow();
    }
}