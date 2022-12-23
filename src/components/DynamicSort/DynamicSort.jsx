import propTypes from 'prop-types';

function DynamicSort(property) {
    return function (a,b) {
          const result = (a[property].toUpperCase() < b[property].toUpperCase()) ? -1 : (a[property] > b[property]) ? 1 : 0;
          return result;
    }
  }
  export default DynamicSort

    DynamicSort.propTypes = {
      property: propTypes.string
  }