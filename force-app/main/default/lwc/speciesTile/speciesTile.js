import { LightningElement, api } from 'lwc';

export default class SpeciesTile extends LightningElement {
  @api specie;

  // specie.Location__c = "Indoors";
  // specie.Location__c = "Outdoors";
  // specie.Location__c = "Indoors,Outdoors";

  get isOutdoors(){
    return this.specie.Location__c.includes("Outdoors");
  }

  get isIndoors(){
    return this.specie.Location__c.includes("Indoors");
  }
}