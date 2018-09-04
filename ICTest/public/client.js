/* eslint-disable no-console */
/* eslint-disable no-undef */
window.client = (function () {
    function getAuctions(success) {
      return fetch('/api/auctions', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(checkStatus)
        .then(parseJSON)
        .then(success);
    }
  
    function timerStart() {
      return fetch('/api/auctions/timerStart', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(checkStatus);
    }
  
    function timerStop() {
      return fetch('/api/auctions/timerStop', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(checkStatus);
    }

    function bid(data) {
        return fetch('/api/auctions/bid', {
          method: 'PUT',
          body: JSON.stringify(data),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        }).then(checkStatus);
      }

    function resetData() {
      return fetch('/api/auctions/resetData', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(checkStatus);
    }
  
    function checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log(error);
        throw error;
      }
    }
  
    function parseJSON(response) {
      return response.json();
    }
  
    return {
      getAuctions,
      timerStop,
      timerStart,
      bid,
      resetData,
    };
  }());
  