import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useLazyQuery } from "@apollo/client";

import GET_VEHICLES from "../../queries/vehicle/vehicles";

import Grid from "../inventory-grid";
import List from "../inventory-list";
import SelectInput from "../inputs-select";
import {
  Container,
  Top,
  Sort,
  View,
  Label,
  Icons,
  Icon,
  Main,
  Bottom,
  BottomIcon,
  Prev,
  Pages,
  Page,
  Next,
} from "./styles";
import { sortOptions } from "./data";

const InventoryVehicles = ({ params, onChange }) => {
  const [vehicles, setVehicles] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(9);
  const [pages, setPages] = useState(0);
  const [getVehicles, { loading, data }] = useLazyQuery(GET_VEHICLES);

  useEffect(() => {
    const { view_type, limit = 9, sort, page = 0, ...rest } = params;

    if (page !== undefined) setPage(page);
    if (limit !== undefined) setLimit(limit);

    getVehicles({
      variables: { params: rest, start: limit * page, limit, sort },
    });
  }, [params]);

  useEffect(() => {
    if (data) {
      setVehicles(data.vehicles);
      const count = data.vehiclesConnection.aggregate.count;
      const pages = Math.ceil(count / limit);
      setPages(pages);
    }
  }, [data]);

  return (
    <Container>
      <Top>
        <Sort>
          <Label>
            <FormattedMessage id="filters.sort" />:
          </Label>
          <SelectInput
            name="sort"
            value={params.sort}
            options={sortOptions}
            onChange={onChange}
            style={{ margin: "15px 0" }}
          />
        </Sort>
        <View>
          <Icons
            active={params.view_type !== "list"}
            onClick={onChange.bind(null, "view_type", "grid")}
          >
            <Icon className="fas fa-th" />
          </Icons>
          <Icons
            active={params.view_type === "list"}
            onClick={onChange.bind(null, "view_type", "list")}
          >
            <Icon className="fas fa-list" />
          </Icons>
        </View>
      </Top>

      <Main view_type={params.view_type}>
        {vehicles.map((vehicle) =>
          params.view_type === "list" ? (
            <List key={vehicle.id} vehicle={vehicle} />
          ) : (
            <Grid key={vehicle.id} vehicle={vehicle} />
          )
        )}
      </Main>

      <Bottom>
        <Prev
          onClick={onChange.bind(null, "page", page - 1)}
          active={page === 0}
        >
          <BottomIcon className="fas fa-chevron-left" />
        </Prev>

        <Pages>
          {new Array(pages).fill(0).map((e, i) => (
            <Page
              key={i}
              onClick={onChange.bind(null, "page", i)}
              active={Number(page) === i}
            >
              {i + 1}
            </Page>
          ))}
        </Pages>

        <Next
          onClick={onChange.bind(null, "page", page + 1)}
          active={page === pages - 1}
        >
          <BottomIcon className="fas fa-chevron-right" />
        </Next>
      </Bottom>
    </Container>
  );
};

export default InventoryVehicles;
