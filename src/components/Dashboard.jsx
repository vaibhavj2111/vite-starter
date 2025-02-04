// Main User Dashboard component

import Navbar from "./Navbar";


export default function Dashboard(){

    return(
        <>
            <Navbar/>
        </>
    )
}

// import React from "react";
// // import { FaSearch } from "react-icons/fa";
// // import "../styles/Dashboard.css";

// export default function Dashboard() {
//   const transactions = [
//     { id: "#281209", status: "Successful", transactionId: "131634495747", refundDate: "Today, 08:45 PM", amount: "₹1,125.00" },
//     { id: "#281208", status: "Processing", transactionId: "131634495747", refundDate: "Yesterday, 8:45 PM", amount: "₹1,125.00" },
//     // { id: "#281207", status: "Failed", transactionId: "131634495747", refundDate: "12 Jul 2023, 3:00 PM", amount: "₹1,125.00" },
//     { id: "#281206", status: "Successful", transactionId: "131634495747", refundDate: "12 Jul 2023, 3:00 PM", amount: "₹1,125.00" },
//   ];

//   return (
    
//     <div className="dashboard-container">
//       <Navbar/>
//       <div className="card-container">
//         <div className="card blue">
//           <h2>Next Payout</h2>
//           <p>₹2,312.23</p>
//           <small>Next Payment Date: Today, 4:00 PM</small>
//         </div>
//         <div className="card">
//           <h2>Amount Pending</h2>
//           <p>₹92,312.20</p>
//         </div>
//         <div className="card">
//           <h2>Amount Processed</h2>
//           <p>₹23,92,312.19</p>
//         </div>
//       </div>
      
//       <div className="transactions-container">
//         <div className="search-bar">
//           <h2>Transactions | This Month</h2>
//           <div className="search-input">
//             <FaSearch className="search-icon" />
//             <input type="text" placeholder="Order ID or transaction ID" />
//           </div>
//         </div>

//         <table className="table-container">
//           <thead>
//             <tr>
//               <th>Order ID</th>
//               <th>Status</th>
//               <th>Transaction ID</th>
//               <th>Refund Date</th>
//               <th>Order Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {transactions.map((tx, index) => (
//               <tr key={index}>
//                 <td>{tx.id}</td>
//                 <td className={
//                   tx.status === "Successful" ? "status-success" :
//                   tx.status === "Failed" ? "status-failed" : "status-processing"
//                 }>{tx.status}</td>
//                 <td>{tx.transactionId}</td>
//                 <td>{tx.refundDate}</td>
//                 <td>{tx.amount}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
