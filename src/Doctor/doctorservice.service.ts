import { Injectable } from "@nestjs/common";
import { DoctorForm } from "./doctorform.dto";


@Injectable()
export class DoctorService {

getIndex():string { 
    return "Doctor Index"; 

}
getDoctorID(id):any {
    
    return "the id is "+id;
}

getDoctorName(qry):any {
    
    return "the id is "+qry.id +" and name is "+qry.name;
}

createDoctor(mydto):any {
    
        return "Doctor Inserted name: " + mydto.name+" and id is " + mydto.id;
    }
addMedicine(mydto):any {
    
        return "Medicine Inserted name: " + mydto.name+" and id is " + mydto.id;
    }
    updateMedicine(name,id):any {
        return "Medicine updated name: " +name+" and id is " +id ;
    }

updateDoctor(name,id):any {
        return "Doctor updated name: " +name+" and id is " +id;
    }
updateDoctorid(name,id):any {
        return "Update Doctor where id " +id+" and change name to " +name;
    }
    deleteDoctorid(id):any {
    
        return "Delete id is "+id;
    }
    

}