import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

export function Card({ scheme }) {
  return (
    <div className="card">
      <div className="heading">
        <p>{scheme.title}</p>
        <h1>
          ${scheme.price}
          <span>/month</span>
        </h1>
      </div>
      <ul className="content">
        <li>
          <FontAwesomeIcon className="icon" icon={faCheck} />
          {scheme.user} Users
        </li>
        <li>
          <FontAwesomeIcon className="icon" icon={faCheck} />
          {scheme.storage}GB Storage
        </li>
        <li className={scheme.unlimitedPublicProject ? "" : "grey"}>
          <FontAwesomeIcon className="icon" icon={scheme.unlimitedPublicProject ? faCheck : faTimes} />
          Unlimited Public Projects
        </li>
        <li className={scheme.communityAccess ? "" : "grey"}>
          <FontAwesomeIcon className="icon" icon={scheme.communityAccess ? faCheck : faTimes} />
          Community Access
        </li>
        <li className={scheme.unlimitedPrivateProject ? "" : "grey"}>
          <FontAwesomeIcon className="icon" icon={scheme.unlimitedPrivateProject ? faCheck : faTimes} />
          Unlimited Private Projects
        </li>
        <li className={scheme.dedicatedPhoneSupport ? "" : "grey"}>
          <FontAwesomeIcon className="icon" icon={scheme.dedicatedPhoneSupport ? faCheck : faTimes} />
          Dedicated Phone Support
        </li>
        <li className={scheme.freeSubdomain[0] ? "" : "grey"}>
          <FontAwesomeIcon className="icon" icon={scheme.freeSubdomain[0] ? faCheck : faTimes} />
          {scheme.freeSubdomain[0] ? scheme.freeSubdomain[1] : "Free"} Subdomain
        </li>
        <li className={scheme.monthlyStatusReports ? "" : "grey"}>
          <FontAwesomeIcon className="icon" icon={scheme.monthlyStatusReports ? faCheck : faTimes} />
          Monthly Status Reports
        </li>
      </ul>
      <button>BUTTON</button>
    </div>
  );
}
