const multiplyValue = (value: number, multiplier? : number): number => {
    if (multiplier !== undefined) {
        return value * multiplier;
    }
    return value * 2;
}



const processInput = (value: string | number | boolean): string | number => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else{
        return value ? "Active" : "Inactive";
    }
}



const formatCoordinate =( [latitude, longitude, locationName]: readonly [number, number, string] ) : string =>{
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}



const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    const combinedArray: T[] = [];

    for(const array of arrays) {
        combinedArray.push(...array);
    }

    return combinedArray;
}



interface Course {
    title : string;
    students : number;
    isPublished : boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    return courses.filter(
        (course : Course): boolean => (course.isPublished && (course.students >= minStudents))
    );
}



const pluckValues = <T, K extends keyof T>(
  items: T[],
  key: K
): T[K][] => {
  return items.map((item : T): T[K] => item[key]);
};



class Employee {
    protected name: string;
    private baseSalary: number;

    constructor( name: string, baseSalary: number){
        this.name = name;
        this.baseSalary = baseSalary;
    }

    public getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor( name: string, baseSalary: number, department: string){
        super(name, baseSalary);
        this.department = department;
    }

    public getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}