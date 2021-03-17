import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Courses } from '../modules/courses/courses';
import { coursesDataService } from 'src/app/modules/courses/courses-data.service';
@Injectable({providedIn: 'root'})
export class EnrollCourseService {

    enCourseList : Courses[] = []
    constructor( private courseService : coursesDataService ) {

     }

     enrollCourse(course : Courses)
     {
        if(this.enCourseList.indexOf(course) !== -1){
            Swal.fire('You have already enrolled for '+course.name+' course')
        } else{
            this.enCourseList.push(course);
            course.enrollments = course.enrollments + 1 ; //--------------------------41
            this.courseService.editCourse( course.id , course.name , course.instructor , course.start_date , course.end_date , course.enrollments ) ;// ----------------------------40
            Swal.fire('Thank you...', 'You have successfully enrolled in '+course.name+' course', 'success')
         }
    }
         


     getEnrolledCourses(){
         return this.enCourseList;
     }
    
}