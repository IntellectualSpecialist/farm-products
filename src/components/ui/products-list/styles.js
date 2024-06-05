import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs } from "swiper/core";
import "swiper/swiper.css";
import styled from "styled-components";

export const StyledSwiper = styled(Swiper)`
  ${(props) => props.gridStart && `grid-column-start: ${props.gridStart};`}
  ${(props) => props.gridEnd && `grid-column-end: ${props.gridEnd};`}
  height: calc(100vh - 202px);
  width: 100%;
  overflow: hidden;
`;

export const StyleSlide = styled(SwiperSlide)`
  height: 288px;
`;
