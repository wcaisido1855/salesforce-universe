public with sharing class TaskDatatableController {
    @AuraEnabled(cacheable=true)

    // recordId is defined in the .js file and passed back to this component through: @wire(getTasks, {recordId: '$recordId'}) tasks
    public static List<Task> getTasks(String recordId) {
        return [SELECT WhatId, Id, Subject, Order__c, OwnerId, Status, Duration__c, CompletedDateTime
                FROM Task WHERE WhatId =: recordId ORDER BY Order__c];
    }

    // Delete record:

    @AuraEnabled
    public static void deleteTask(Task objtask){
        try {
            delete objtask;
        }
        catch(Exception ex) {
            throw new AuraHandledException(ex.getMessage());
        }
    }
}
