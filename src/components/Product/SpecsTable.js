/** @jsx jsx */
import { jsx } from "theme-ui";
// eslint-disable-next-line no-unused-vars
import React from "react";

import "./Product.css";

function SpecsTable() {
  const table = (
    <div className="px-3 flex justify-center text-white">
      <table className="w-full text-md bg-black-hakkei shadow-lg my-2 rounded-md border-solid border-2 border-gray-100">
        <tbody>
          <tr className="border-b">
            <td className="p-3 px-5">Layout</td>
            <td className="p-3 px-5">
              US ANSI (74 keys, including clickable Rotary Encoder)
            </td>
            <td className="p-3 px-5">Keycap Puller</td>
            <td className="p-3 px-5">Included</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 px-5">Stabilizers</td>
            <td className="p-3 px-5">Kaihl Choc Stabilizers </td>
            <td className="p-3 px-5">Backlit RGB</td>
            <td className="p-3 px-5">Yes</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 px-5">Plate</td>
            <td className="p-3 px-5">Single-body polycarbonate</td>
            <td className="p-3 px-5">Battery Life</td>
            <td className="p-3 px-5">20 hours (wireless + full brightness)</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 px-5">Enclosure </td>
            <td className="p-3 px-5">Polycarbonate</td>
            <td className="p-3 px-5">Cord Length </td>
            <td className="p-3 px-5">6 Feet</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 px-5">Removable Keycaps</td>
            <td className="p-3 px-5">Yes</td>
            <td className="p-3 px-5">N-Key Rollover</td>
            <td className="p-3 px-5">Full NKRO</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 px-5">USB Type</td>
            <td className="p-3 px-5">USB-C x 2</td>
            <td className="p-3 px-5">Battery Indicator</td>
            <td className="p-3 px-5">Yes</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 px-5">Switches</td>
            <td className="p-3 px-5">Kaihl Choc </td>
            <td className="p-3 px-5">Palm Rest</td>
            <td className="p-3 px-5">Reattachable</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 px-5">Weight</td>
            <td className="p-3 px-5">3.3lbs estimated</td>
            <td className="p-3 px-5">Support System</td>
            <td className="p-3 px-5">Usbnex™ (Chrome V89 or similar)</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 px-5">Battery </td>
            <td className="p-3 px-5">Rechargeable Lithium-Ion</td>
            <td className="p-3 px-5">Support Devices </td>
            <td className="p-3 px-5">Any device support Chrome V89+</td>
          </tr>
          <tr className="border-b">
            <td className="p-3 px-5">Warranty</td>
            <td className="p-3 px-5">2 years</td>
            <td className="p-3 px-5">Open Source</td>
            <td className="p-3 px-5">Planned</td>
          </tr>
          <tr>
            <td className="p-3 px-5">Certifications</td>
            <td className="p-3 px-5">FCC, CE, TUV, RoHS</td>
            <td className="p-3 px-5">Keycaps</td>
            <td className="p-3 px-5">
              PBT/Polycarbonate Double-Shot (Translucent)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  return table;
}

export default SpecsTable;
