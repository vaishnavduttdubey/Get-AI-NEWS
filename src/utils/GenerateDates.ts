export default function generate30Dates(): Record<string, number>{
    const result: Record<string, number>={}
    const today=new Date();

    for(let i=0;i<30;i++)
        {
            const currentDate=new Date(today.getTime());
            currentDate.setDate(today.getDate()+i);

            //format thge date
            const year=currentDate.getFullYear();
            const month=String(currentDate.getMonth()+1).padStart(2,'0');
            const day=String(currentDate.getDate()).padStart(2,'0');

            const formatteddate= `${year}-${month}-${day}`;
            result[formatteddate]=i;

        }

    return result;
}