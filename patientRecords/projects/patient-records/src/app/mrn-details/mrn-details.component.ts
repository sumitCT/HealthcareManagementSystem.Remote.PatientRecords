import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

export interface PatientMRN {
  id: number;
  mrn: string;
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  visitDate: string;
  department: string;
  status: string;
}

@Component({
  selector: 'app-mrn-details',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  templateUrl: './mrn-details.component.html',
  styleUrl: './mrn-details.component.scss'
})
export class MrnDetailsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'mrn', 'firstName', 'lastName', 'dob', 'gender', 'visitDate', 'department', 'status'];
  dataSource: PatientMRN[] = [];

  ngOnInit(): void {
    // Generate fake patient MRN data
    this.dataSource = this.generateFakePatientData(20);
  }

  private generateFakePatientData(count: number): PatientMRN[] {
    const patients: PatientMRN[] = [];
    const departments = ['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Oncology'];
    const statuses = ['Active', 'Discharged', 'Scheduled', 'In Treatment', 'Follow-up'];
    const genders = ['Male', 'Female', 'Other'];

    for (let i = 1; i <= count; i++) {
      const year = Math.floor(Math.random() * 50) + 1950;
      const month = Math.floor(Math.random() * 12) + 1;
      const day = Math.floor(Math.random() * 28) + 1;
      const dob = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;

      const vYear = 2024;
      const vMonth = Math.floor(Math.random() * 12) + 1;
      const vDay = Math.floor(Math.random() * 28) + 1;
      const visitDate = `${vMonth.toString().padStart(2, '0')}/${vDay.toString().padStart(2, '0')}/${vYear}`;

      patients.push({
        id: i,
        mrn: `MRN${Math.floor(10000 + Math.random() * 90000)}`,
        firstName: `Patient${i}`,
        lastName: `LastName${i}`,
        dob: dob,
        gender: genders[Math.floor(Math.random() * genders.length)],
        visitDate: visitDate,
        department: departments[Math.floor(Math.random() * departments.length)],
        status: statuses[Math.floor(Math.random() * statuses.length)]
      });
    }

    return patients;
  }
}
