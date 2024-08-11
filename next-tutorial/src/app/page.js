import Image from "next/image";
import styles from "./page.module.css";
import _ from 'lodash';
import { GridColumn, Grid, GridRow,  Segment } from 'semantic-ui-react';
import Link from 'next/link';

export default function Home() {
    let title = '미니유'
    let name = 'Jacob CHUNG'
  return (
    <div className='ui center aligned three column grid'>
        {/* <div className='row'>
            <div className='column'>
                <div className='ui segment'>
                <Link href='/'>홈</Link></div>
            </div>
            <div className='column'>
                <div className='ui segment'>
                <Link href='/list'>리스트</Link></div>
            </div>
        </div> */}
        <div className='row'>
            <div className='column'>
            <h4 className='title' style={{ color: 'red', fontSize:'30px' }}>
            {title}</h4>
            <p className='title-sub'>{name}</p>
            </div>
        </div>
    </div>
  );
}
