import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
//css
import { StyledWrap } from "../css/StyledWrap";
import { StyledBlur } from "../css/StyledBlur";
import { StyledMain } from "../css/StyledMain";
import { StyledHeader } from "../css/StyledHeader";
import { StyledDetailArea } from "../css/StyledDetailArea";
import { StyledDetailContent } from "../css/StyledDetailContent";
//util
import { REGION_LIST } from "../utils/regionData";
import { Map } from "react-kakao-maps-sdk";

function DetailMapArea() {
  const location = useLocation();
  const [region, setRegion] = useState();

  useEffect(() => {
    const id = location.pathname.split("/")[2];
    setRegion(REGION_LIST.find((region) => region.id === Number(id)));
  }, []);

  if (region) {
    // console.log(region);
  }

  return (
    <StyledWrap>
      <StyledBlur />
      <StyledMain>
        <StyledDetailArea>
          <StyledHeader>MAP</StyledHeader>
          <StyledDetailContent>
            {region ? (
              <Map
                center={{ lat: region.lat, lng: region.lng }}
                level={region.level}
                style={{ width: "100%", height: "100%" }}
                // onCreate={setMap}
              >
                {/* <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
                <div style={{ color: "#000" }}>Hello World!</div>
              </MapMarker> */}
              </Map>
            ) : null}
          </StyledDetailContent>
        </StyledDetailArea>
      </StyledMain>
    </StyledWrap>
  );
}

export default DetailMapArea;
