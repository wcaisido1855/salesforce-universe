public with sharing class InteractionNewTaskController {

    @AuraEnabled
    public static Task saveTask(String subject, String description, String priority, String type){
        Task t = new Task();
        t.Subject = subject;
        t.Description = description;
        t.Priority = priority;
        t.Type = type;
        t.OwnerId = UserInfo.getUserId();
        t.ActivityDate = Date.today();
        insert t; 
        return t;
    }
}
