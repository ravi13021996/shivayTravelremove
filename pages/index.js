import Head from 'next/head';
import { useEffect, useState } from "react"
import styles from '../styles/Home.module.css';
import Header from "./Header/index"
import Vehicals from './components/Vehicals';
import ListComp from './components/ListComp';
export default function Home() {
  let [headerHeight, setheaderHeight] = useState("")
  // let heightHeader
  useEffect(() => {
    if (document) {

      let temp = document.getElementById("header").clientHeight
      setheaderHeight(temp)
    }
  }, [])

  // console.log(heightHeader, "heightHeader")
  return (
    <div className={styles.container} style={{ display: "block", margin: "0", padding: "0" }}>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=IM+Fell+French+Canon&family=Inter:wght@600&family=Plus+Jakarta+Sans:wght@300&family=Poppins:wght@300&display=swap" rel="stylesheet"></link>
      </Head>

      <Header />
      <div style={{ marginTop: `${headerHeight}px` }} className={`${styles.mainBody} border border-danger d-flex`}>
        <span>
          <ListComp/>
        </span>
        <span >
          <Vehicals />
        </span>
      </div>
    </div>
  );
}
