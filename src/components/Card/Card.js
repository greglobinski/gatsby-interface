import React from "react"
import styled from "react-emotion"

import CardSkeleton from "./Card.Skeleton"
import { StyledBaseCard } from "./BaseCard"

const StyledCard = styled(StyledBaseCard)``

const Card = props => <CardSkeleton StyledComponent={StyledCard} {...props} />

export default Card
