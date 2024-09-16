import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-creer',
  templateUrl: './creer.component.html',
  styleUrls: ['./creer.component.scss']
})
export class CreerComponent {
    showForm1: boolean = false;
    showForm2: boolean = false;
    showForm3: boolean = false;
    showForm4: boolean = false;
    showForm5: boolean = false;
    showForm6: boolean = false;
    showForm7: boolean = false;
    showForm8: boolean = false;
   // Définir la méthode displayForm pour afficher le formulaire correspondant
   displayForm(formNumber: number) {
    // Réinitialiser l'affichage de tous les formulaires
    this.resetForms();

    // Afficher le formulaire correspondant en fonction du numéro passé en paramètre
    switch (formNumber) {
      case 1:
        this.showForm1 = true;
        break;
      case 2:
        this.showForm2 = true;
        break;
      case 3:
        this.showForm3 = true;
        break;
      case 4:
        this.showForm4 = true;
        break;
      case 5:
        this.showForm5 = true;
        break;
      case 6:
        this.showForm6 = true;
        break;
      case 7:
        this.showForm7 = true;
        break;
      case 8:
        this.showForm8 = true;
        break;
      default:
        break;
    }
  }

  // Méthode pour réinitialiser tous les formulaires
  private resetForms() {
    this.showForm1 = false;
    this.showForm2 = false;
    this.showForm3 = false;
    this.showForm4 = false;
    this.showForm5 = false;
    this.showForm6 = false;
    this.showForm7 = false;
    this.showForm8 = false;
  }
 

}
