import React from "react"
import cardStyles from "./card.module.css"

export default ({ children }) => (
  <div>
    <div className={cardStyles.card}>
      <div class="card">
        {children}
      </div>
    </div>
  </div>
)
