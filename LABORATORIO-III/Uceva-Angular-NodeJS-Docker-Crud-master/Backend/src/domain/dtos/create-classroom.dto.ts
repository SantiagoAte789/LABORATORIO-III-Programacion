export class CreateClassroomDTO {

    private constructor(
        public readonly name: string,
        public readonly building: string,
        public readonly capacity: number,
        public readonly type: string,
        public readonly floor: number,
        public readonly status: boolean
    ) {}

    static create(
        object: { [key: string]: any },
    ): [string | undefined, CreateClassroomDTO?]{
        const {
            name,
            building,
            capacity,
            type,
            floor,
            status
        } = object;

        if(!name) return ["Falta el nombre"];
        if(!building) return ["Falta el edificio"];
        if(!capacity) return ["Falta la capacidad"];
        if(!type) return ["Falta el tipo"];
        if(!floor) return ["Falta el piso"];
        if(typeof status !== "boolean") return ["El estado debe ser verdadero o falso"];

        if(name && name.length > 100)
            return ["El nombre es demasiado largo, el máximo es 100 caracteres"];

        return [
            undefined,
            new CreateClassroomDTO(
                name,
                building,
                capacity,
                type,
                floor,
                status
            )
        ];

    }

}