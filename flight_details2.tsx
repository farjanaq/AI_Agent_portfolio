const styles = {

    headerContainer: {
      marginBottom: '12px',
    },
    flightNumber: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '12px',
    },
    flightNumberText: {
      color: '#FFFFFF',
      fontSize: '20px',
      fontWeight: 600,
      fontFamily: "'Inter', sans-serif",
    },
    flightInfo: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    cityInfo: {
      textAlign: 'center',
    },
    city: {
      color: '#FFFFFF',
      fontSize: '18px',
      fontWeight: 600,
      fontFamily: "'Inter', sans-serif",
    },
    time: {
      color: '#FFFFFF',
      fontSize: '16px',
      fontWeight: 500,
      fontFamily: "'Inter', sans-serif",
    },
    ampm: {
      color: '#8E8E8E',
      fontSize: '12px',
      fontWeight: 400,
      fontFamily: "'Inter', sans-serif",
    },
    planeIcon: {
      margin: '0 16px',
    },
    divider: {
      height: '1px',
      backgroundColor: '#333333',
      margin: '12px 0',
    },
    row: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '8px',
    },
    column: {
      flex: '0 0 42%',
    },

    emptyColumn: {
      flex: '0 0 40%',
    },
    longColumn:{
      flex: '0 0 45%',
    },
    fullColumn: {
      width: '100%',
    },
    label: {
      color: '#8E8E8E',
      fontSize: '14px',
      fontWeight: 400,
      marginBottom: '2px',
      fontFamily: "'Inter', sans-serif",
    },
    value: {
      color: '#FFFFFF',
      fontSize: '16px',
      fontWeight: 500,
      fontFamily: "'Inter', sans-serif",
    },
    viewAllContainer: {
      marginTop: '4px',
    },
    viewAll: {
      color: '#4CAF50',
      fontSize: '14px',
      fontWeight: 500,
      cursor: 'pointer',
      fontFamily: "'Inter', sans-serif",
    },
    price: {
      color: '#FFFFFF',
      fontSize: '20px',
      fontWeight: 500,
      fontFamily: "'Inter', sans-serif",
    }
  };



 <div style={styles.headerContainer}>
            <div style={styles.flightNumber}>
              <img src={image} alt="Company Icon" style={{ width: '45px', height: '35px', marginRight: '8px' }} />
              <span style={styles.flightNumberText}>{flightNumber}</span>
            </div>
            <div style={styles.row}>  
            </div>
            <div style={styles.flightInfo}>
              <div style={styles.cityInfo}>
                <div style={styles.city}>{source}</div>
                <div style={styles.time}>{departure}</div>
              </div>
              <div style={styles.planeIcon}>
                <FontAwesomeIcon icon={faPlane} size="sm" color="#FFFFFF" />
              </div>
              <div style={styles.cityInfo}>
                <div style={styles.city}>{destination}</div>
                <div style={styles.time}>{arrival}</div>
              </div>
            </div>
          </div>
          <div style={styles.row}>
          </div>
          <div style={styles.divider}></div>
          <div style={styles.row}>
          </div>
          <div style={styles.row}>
            <div style={styles.column}>
              <div style={styles.label}>Airlines</div>
              <div style={styles.value}>{company}</div>
            </div>
            <div style={styles.column}>
              <div style={styles.label}>Class</div>
              <div style={styles.value}>Business</div>
            </div>
            <div style={styles.fullColumn}>
              <div style={styles.label}>Distance</div>
              <div style={styles.value}>{distance}</div>
            </div>
          </div>
          <div style={styles.row}>
          </div>
          <div style={styles.row}>
            <div style={styles.column}>
              <div style={styles.label}>Cabin Baggage</div>
              <div style={styles.value}>10kg</div>
            </div>
            <div style={styles.column}>
              <div style={styles.label}>Private Storage</div>
              <div style={styles.value}>Included</div>
            </div>
            <div style={styles.fullColumn}>
              <div style={styles.label}>Breakfast</div>
              <div style={styles.value}>Included</div>
            </div>
          </div>
          <div style={styles.row}>
          </div>
          <div style={styles.row}>
            <div style={styles.column}>
              <div style={styles.label}>Check-In Baggage</div>
              <div style={styles.value}>20kg</div>
            </div>
            <div style={styles.column}>
              <div style={styles.label}>Cancellation Penalty</div>
              <div style={styles.value}>$30</div>
            </div>
            <div style={styles.fullColumn}>
              <div style={styles.label}>Pets</div>
              <div style={styles.value}>Allowed</div>
            </div>
          </div>
          <div style={styles.row}>
          </div>
          <div style={styles.divider}></div>
          <div style={styles.row}>
          </div>
          <div style={styles.row}>
          </div>
          <div style={styles.row}>
            <div style={styles.longColumn}>
              <div style={styles.value}>Business Class Price</div>
            </div>
            <div style={styles.emptyColumn}>
            </div>
            <div style={styles.column}>
              <div style={styles.price}>{price}</div>
            </div>
          </div> 