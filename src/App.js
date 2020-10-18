import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown,
  faThumbsUp,
  faImage,
  faMoneyCheck,
  faSearchDollar,
} from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  state = {
    isLoading: false,
    invoices: [
      {
        id: "0",
        vendor: "Paint Supply Co.",
        invoiceNumber: "1123",
        amount: "$10,000",
        date: "10/7/20",
      },
      {
        id: "1",
        vendor: "Paint Supply Co.",
        invoiceNumber: "1123",
        amount: "$10,000",
        date: "10/7/20",
      },
      {
        id: "2",
        vendor: "Paint Supply Co.",
        invoiceNumber: "1123",
        amount: "$10,000",
        date: "10/7/20",
      },
      {
        id: "3",
        vendor: "Paint Supply Co.",
        invoiceNumber: "1123",
        amount: "$10,000",
        date: "10/7/20",
      },
      {
        id: "4",
        vendor: "Paint Supply Co.",
        invoiceNumber: "1123",
        amount: "$10,000",
        date: "10/7/20",
      },
    ],
  };

  remove(id) {
    let updatedInvoices = [...this.state.invoices].filter((i) => i.id !== id);
    this.setState({
      invoices: updatedInvoices,
    });
  }

  render() {
    const isLoading = this.state.isLoading;
    const allInvoices = this.state.invoices;

    if (isLoading) return <div>Loading...</div>;

    let invoices = allInvoices.map((invoice) => (
      <tr key={invoice.id}>
        <td>{invoice.vendor}</td>
        <td>{invoice.amount}</td>
        <td>{invoice.invoiceNumber}</td>
        <td>{invoice.date}</td>
        <td>
          <Button
            className="btn btn-lg btn-success"
            onClick={() => this.remove(invoice.id)}
          >
            <FontAwesomeIcon icon={faThumbsUp} />
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-lg btn-danger"
            onClick={() => this.remove(invoice.id)}
          >
            <FontAwesomeIcon icon={faThumbsDown} />
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-lg btn-info"
            onClick={() => this.remove(invoice.id)}
          >
            <FontAwesomeIcon icon={faMoneyCheck} />
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-lg btn-warning"
            onClick={() => this.remove(invoice.id)}
          >
            <FontAwesomeIcon icon={faSearchDollar} />
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-lg btn-info"
            onClick={() => this.remove(invoice.id)}
          >
            <FontAwesomeIcon icon={faImage} />
          </Button>
        </td>
      </tr>
    ));

    return (
      <div className="container border border-secondary rounded center">
        <div className="row">
          <div className="col-12">
            <h4>Pending Invoices - The Test Company</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 center text-center">
            <Table dark responsive striped bordered hover>
              <thead>
                <tr>
                  <th>vendor</th>
                  <th>invoice #</th>
                  <th>amount</th>
                  <th>date</th>
                  <th colSpan="4">action</th>
                  <th>Image</th>
                </tr>
              </thead>

              <tbody>
                {this.state.invoices.length === 0 ? (
                  <td colSpan="9">All Caught Up</td>
                ) : (
                  invoices
                )}
                
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
