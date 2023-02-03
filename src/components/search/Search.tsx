import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { FETCH_LOCATION_SUCCESS } from '../../redux/reducersConst'
import { API_KEY } from '../../settings/APIKEY'
import { locationType } from '../../types'
import '../search/search.scss'

type SearchPropTypes = {
  openSearch: boolean
  setOpenSearch: Dispatch<SetStateAction<boolean>>
}
type ListOfLocationsType = {
  name: string
  lat: number
  lon: number
  country: string
  state: string
}
// ===============================================

function Search(props: SearchPropTypes) {
  const dispatch = useDispatch()

  const updateLocation = (data: locationType) => {
    dispatch({ type: FETCH_LOCATION_SUCCESS, payload: data })
  }
  const errorLocation = (data: locationType) => {
    dispatch({ type: FETCH_LOCATION_SUCCESS, payload: data })
  }

  // ============================================

  const [locInput, setLocInput] = useState<string>('')
  const [listOfLocations, setListOfLocations] = useState<ListOfLocationsType[]>(
    [],
  )

  // function which get value from input
  const getLocInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const def = e.target.value
    setLocInput(def)
    if (def === '') setListOfLocations([])

    console.log(e.target.value)
  }

  // function calls when click on suggested option
  const ClickOnLocationOption = (el: locationType) => {
    const def = {
      name: el.name,
      lat: el.lat,
      lon: el.lon,
    }
    updateLocation(def)
    props.setOpenSearch((el) => !el)
  }

  //   function useDebounce<T>(
  //     initialValue: T,
  //     time: number,
  //   ): [T, T, React.Dispatch<T>] {
  //     const [value, setValue] = useState<T>(initialValue)
  //     const [debouncedValue, setDebouncedValue] = useState<T>(initialValue)
  //     useEffect(() => {
  //       const debounce = setTimeout(() => {
  //         setDebouncedValue(value)
  //       }, time)
  //       return () => {
  //         clearTimeout(debounce)
  //       }
  //     }, [value, time])
  //     return [debouncedValue, value, setValue]
  //   }

  //fetching location
  useEffect(() => {
    // const locUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`
    if (locInput !== '') {
      const locUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${locInput}&limit=5&appid=${API_KEY}`

      fetch(locUrl)
        .then((res) => res.json())
        .then((data) => {
          const def = [...data]
          setListOfLocations(def)
          // console.log(data)
        })
    }
  }, [locInput])

  return (
    <>
      {props.openSearch ? (
        <div className="SearchSection">
          <div className="SearchSection_wrapper">
            <div className="SearchSection_wrapper_inputBlock_Holder">
              <input
                value={locInput}
                onChange={(e) => getLocInput(e)}
                placeholder="search..."
                className="SearchSection_wrapper_inputBlock"
              ></input>
              <div
                onClick={() => props.setOpenSearch((el) => !el)}
                className="SearchSection_wrapper_closeInput"
              ></div>
            </div>

            <div className="SearchSection_wrapper_suggestionBlock">
              {listOfLocations.map((el: ListOfLocationsType, index: number) => {
                return (
                  <div
                    onClick={() => {
                      ClickOnLocationOption(el)
                    }}
                    key={`SSWSB_${el.lat}_${el.lon}_${index}`}
                    className="SearchSection_wrapper_suggestionBlock_el"
                  >
                    <div className="SearchSection_wrapper_suggestionBlock_el_name">
                      {el.name}{' '}
                    </div>
                    <div className="SearchSection_wrapper_suggestionBlock_el_state">
                      {el.state}{' '}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Search
