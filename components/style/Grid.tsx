import { ReactNode } from "react"

let GridDefaultProps = {
    columns: 'grid-cols-4',
    rows: '',
    others: ''
}

type gridProps = { columns: string, rows: string, others: string, children: ReactNode } & typeof GridDefaultProps


export const Grid = (props: gridProps) => {
    return (
        <>
            <div className={`grid ${props.columns} ${props.rows} ${props.others} `}> {props.children} </div>
        </>
    )
}

Grid.defaultProps = GridDefaultProps