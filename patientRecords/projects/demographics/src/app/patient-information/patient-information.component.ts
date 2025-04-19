import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Patient {
  id: number;
  mrn: string;
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  address: string;
  phoneNumber: string;
  email: string;
  insuranceProvider: string;
}

@Component({
  selector: 'app-patient-information',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './patient-information.component.html',
  styleUrl: './patient-information.component.scss',
})
export class PatientInformationComponent implements OnInit {
  displayedColumns: string[] = [
    'mrn',
    'firstName',
    'lastName',
    'dob',
    'gender',
    'phoneNumber',
    'insuranceProvider',
  ];
  dataSource!: MatTableDataSource<Patient>;

  // Sample patient data
  patients: Patient[] = [
    {
      id: 1,
      mrn: 'MRN12345',
      firstName: 'John',
      lastName: 'Smith',
      dob: '1980-05-15',
      gender: 'Male',
      address: '123 Main St, New York, NY 10001',
      phoneNumber: '(212) 555-1234',
      email: 'john.smith@example.com',
      insuranceProvider: 'Blue Cross',
    },
    {
      id: 2,
      mrn: 'MRN23456',
      firstName: 'Emily',
      lastName: 'Johnson',
      dob: '1992-08-22',
      gender: 'Female',
      address: '456 Park Ave, Boston, MA 02108',
      phoneNumber: '(617) 555-7890',
      email: 'emily.johnson@example.com',
      insuranceProvider: 'Aetna',
    },
    {
      id: 3,
      mrn: 'MRN34567',
      firstName: 'Michael',
      lastName: 'Williams',
      dob: '1975-12-03',
      gender: 'Male',
      address: '789 Oak St, Chicago, IL 60601',
      phoneNumber: '(312) 555-4567',
      email: 'michael.williams@example.com',
      insuranceProvider: 'UnitedHealth',
    },
    {
      id: 4,
      mrn: 'MRN45678',
      firstName: 'Sarah',
      lastName: 'Brown',
      dob: '1988-03-27',
      gender: 'Female',
      address: '101 Pine St, San Francisco, CA 94101',
      phoneNumber: '(415) 555-8901',
      email: 'sarah.brown@example.com',
      insuranceProvider: 'Kaiser Permanente',
    },
    {
      id: 5,
      mrn: 'MRN56789',
      firstName: 'Robert',
      lastName: 'Jones',
      dob: '1965-10-11',
      gender: 'Male',
      address: '202 Cedar Ave, Seattle, WA 98101',
      phoneNumber: '(206) 555-3456',
      email: 'robert.jones@example.com',
      insuranceProvider: 'Cigna',
    },
  ];

  ngOnInit() {
    // Initialize the data source with the patient data
    this.dataSource = new MatTableDataSource(this.patients);
  }
}
