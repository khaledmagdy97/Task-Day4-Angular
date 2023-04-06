import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent
{
  student: { Id: Number, Name: string, Age: string, Email: string }[] =
    [{ Id: 1, Name: "Kahled", Age: "15", Email: "khaledmagdy61@gmail.com " },
    { Id: 2, Name: "Kahled", Age: "15", Email: "khaledmagdy61@gmail.com " },
    { Id: 2, Name: "Kahled", Age: "15", Email: "khaledmagdy61@gmail.com " },
    { Id: 4, Name: "Kahled", Age: "15", Email: "khaledmagdy61@gmail.com " },
    ];
  
}
