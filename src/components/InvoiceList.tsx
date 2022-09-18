import React from "react"

type InvoiceListProps = {

}

type InvoiceListState = {
    invoices: any[],
    loaded: boolean,
    sumary: {
        total: number,
        pending: number,
        paid: number,
        failed: number
    }
}


class InvoiceList extends React.Component<InvoiceListProps, InvoiceListState>{

    constructor(props: InvoiceListProps) {
        super(props);
        this.state = {
            invoices: [],
            loaded: false,
            sumary: {
                total: 0,
                pending: 0,
                paid: 0,
                failed: 0
            }
        }
    }

    getBadgeColor(status : string){
        switch (status) {
            case "created":
                return "secondary"
            
            case "expired":
                return "danger"
            
            case "overdue":
                return "warning"
            
            case "voided":
                return "dark"

            case "paid":
                return "success"
            default:
                return "warning"
        }
    }

    async componentDidMount() {
        const request = await fetch("/api/webhook");
        const response = await request.json();

        this.setState({
            invoices: response.invoices || [],
            loaded: true
        })

        this.getSumary();
    }

    getSumary(){
        let total = 0;
        let pending = 0;
        let failed = 0;
        let paid = 0;

        this.state.invoices.forEach(invoice => {
            if(invoice.status === "paid"){
                paid += 1;
            }
            
            if(invoice.status === "created"){
                pending += 1;
            }

            if(invoice.status === "voided" || invoice.status === "overdue" ||
                invoice.status === "canceled" || invoice.status === "expired"){
                    failed += 1;
            }
        });

        this.setState({
            sumary: {
                failed,
                paid,
                pending,
                total: this.state.invoices.length
            }
        })
    }

    render(): React.ReactNode {
        if (this.state.loaded) {
            return (
                <> 
                    <div className="card">
                        <p className="card-title p-2">Sumary</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Total: <span className="badge align-self-end bg-primary">{this.state.sumary.total}</span></li>
                            <li className="list-group-item">Pending: <span className="badge align-self-end bg-warning">{this.state.sumary.pending}</span></li>
                            <li className="list-group-item">failed: <span className="badge align-self-end bg-danger">{this.state.sumary.failed}</span></li>
                            <li className="list-group-item">Paid: <span className="badge align-self-end bg-success">{this.state.sumary.paid}</span></li>
                        </ul>
                    </div>
                        
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Value</th>
                                <th scope="col">Client Name</th>
                                <th scope="col">Created At</th>
                                <th scope="col">Due Date</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.invoices.map(invoice => {
                                    return (
                                        <tr key={invoice.id}>
                                            <th scope="row">{invoice.id}</th>
                                            <td>R${Number(invoice.amount / 100).toFixed(2)}</td>
                                            <td>{invoice.name}</td>
                                            <td>{invoice.created}</td>
                                            <td>{invoice.due}</td>
                                            <td><span className={`badge rounded-pill bg-${this.getBadgeColor(invoice.status || "")}`}>{invoice.status}</span></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </>
            )
        } else {
            return "Loading ..."
        }

    }

}


export {
    InvoiceList
}