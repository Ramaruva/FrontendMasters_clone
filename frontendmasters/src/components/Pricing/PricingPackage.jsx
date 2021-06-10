import React from "react";
import styled from "styled-components";


const Packbox = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  font-family: Open Sans, sans-serif;
  letter-spacing: 0;
  background: #222;
  color: #e6e6e6;
  font-size: 16px;
  line-height: 1.5;
  .subscriptionslist {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    justify-content: space-between;
  }
  .hidden {
    display: none;
  }
  .subscriptionslist .details {
    width: 25%;
    margin-right: 20px;
    background: #111;
    border-top: 7px solid #3e3e3e;
    box-shadow: 0 2px 6px 0 rgb(0 0 0 / 20%);
    cursor: pointer;
    padding: 16px 20px 20px;
    position: relative;
  }
  .subscriptionslist .details .name {
    padding-bottom: 0;
    margin-bottom: 10px;
    margin-right: 45px;
    line-height: 160%;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 800;
  }
  .subscriptionslist .price {
    position: absolute;
    top: 10px;
    right: -6px;
    background: #d85519;
    color: #fff;
    border-radius: 5px;
    font-weight: 700;
    padding: 5px;
  }
  .subscriptionslist .description {
    font-size: 17px;
  }
  .subscriptionslist input[type="radio"]:checked + .details {
    background: #90221e;
    border-top: 7px solid #c02d28;
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 20%);
  }
`;


export const PricingPackage = ({ handlePlan }) => {
  return (
    <Packbox>
      <div className="subscriptionslist">
        <input
          type="radio"
          className="hidden"
          name="level"
          id="level1"
          checked
        />
        <label htmlFor="level1" className="details" onClick={handlePlan}>
          <h3 className="name" id="Monthly">
            Montly
          </h3>
          <div className="price" id="Monthly">
            $39
          </div>
          <div className="description" id="Monthly">
            Access all premium courses, workshops, and mobile apps. Renewed
            monthly.
          </div>
        </label>
        <input type="radio" className="hidden" name="level" id="level2" />
        <label htmlFor="level2" className="details" onClick={handlePlan}>
          <h3 className="name" id="YEARLY">
            YEARLY
          </h3>
          <div className="price" id="YEARLY">
            $390
          </div>
          <div className="description" id="YEARLY">
            Access everything. Renewed yearly. Save $78 per year!
          </div>
        </label>
        <input type="radio" className="hidden" name="level" id="level3" />
        <label htmlFor="level3" className="details" onClick={handlePlan}>
          <h3 className="name" id="Monthly Team">
            MONTHLY TEAM
          </h3>
          <div className="price" id="Monthly Team">
            $195
          </div>
          <div className="description" id="Monthly Team">
            Access for 10 people at your company, renewed monthly. Save 50% on
            our monthly plans!
          </div>
        </label>
        <input type="radio" className="hidden" name="level" id="level4" />
        <label htmlFor="level4" className="details" onClick={handlePlan}>
          <h3 className="name" id="Yearly Team">
            YEARLY TEAM
          </h3>
          <div className="price" id="Yearly Team">
            $1950
          </div>
          <div className="description" id="Yearly Team">
            Access for 10 people at your company, renewed yearly. Save 50% on
            our yearly plans!
          </div>
        </label>
      </div>
    </Packbox>
  );
};
