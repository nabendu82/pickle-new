import  {pareseISo, format, parse, parseISO} from 'date-fns'

export default function Date({dateString}){
    const date = parseISO(dateString)


    return(
        <time>{format(date, 'LLLL d y')}</time>
    )
}