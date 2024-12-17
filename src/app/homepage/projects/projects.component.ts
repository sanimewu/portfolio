import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  allProjects = [
    {
      title: ' Government Vaccination Information System Portal',
      using: ' Using HTML, CSS, Bootstrap, PHP, MySQL',
      description: ' This website provides information about vaccines, vaccination schedules, and related services. It also\n' +
        ' provides features such as appointments, reminders, and notifications.',
      link: 'https://github.com/sanim2001/vaccine',
      live: '',
    },
    {
      title: 'ToDo Application',
      using: 'Using TypeScript, Angular, RxJs',
      description: 'This application focuses on efficient task\n' +
        ' management and user-friendly design. It allows users to create, update, and delete tasks easily and provides\n' +
        ' real-time updates on task status.',
      link: 'https://github.com/sanimewu/todo-application',
      live: '',
    },
    {
      title: 'IT Company Management System',
      using: 'Using Java Swing ',
      description: 'The program includes text fields for\n' +
        ' entering details, a button to add information, and a display area to showcase the entered data. Deals with the\n' +
        ' maintenance of admin, Client, and Product information within the Company.',
      link: 'https://github.com/sanim2001/It_management_system',
      live: '',
    },

  ];
  constructor() {
  }

}
