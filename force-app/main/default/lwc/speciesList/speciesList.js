import getAllSpecies from '@salesforce/apex/SpeciesService.getAllSpecies';
import { LightningElement, wire } from 'lwc';

export default class SpeciesList extends LightningElement {
  
  @wire(getAllSpecies)
  species;
}