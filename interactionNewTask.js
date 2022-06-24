import { LightningElement, track } from 'lwc';
import{ ShowToastEvent } from 'lightning/platformShowToastEvent';
import saveTask from '@salesforce/apex/InteractionNewTaskController.saveTask';

export default class InteractionNewTask extends LightningElement {
    @track type;
    @track priority;
    @track subject;
    @track description;

    get typePicklistValues(){
        return[
            { label: 'Task', value: 'Task' },
            { label: 'Phone Call', value: 'Call' },
            { label: 'Meeting', value: 'Meeting' },
            { label: 'Email;', value: 'Email' },
            { label: 'Note', value: 'Note' }
        ];
    }

    get typePicklistValues(){
        return[
            { label: 'High', value: 'High' },
            { label: 'Normal', value: 'Normal' },
            { label: 'Low', value: 'Low' }
        ];
    }

    handleTypeChange(event){
        this.type=event.target.value;
    }

    handlePriorityChange(event){
        this.priority=event.target.value;
    }

    handleSubjectChange(event){
        this.Subject=event.target.value;
    }

    handleDescriptionChange(event){
        this.Description=event.target.value;
    }

    addTask() {
        saveTask({subject: this.subject, description: this.description, priority: this.priority, type: this.type})
            .then(task => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: "Success",
                        message: "Task Created",
                        variant: "success"
                    })
                );
            })
            .catch(error => {
               this.dispatchEvent(
                   new ShowToastEvent({
                       title: "Erorr Creating Task",
                       mesage: error,
                       variant: 'error'
                   })
               );
            });
    }



}