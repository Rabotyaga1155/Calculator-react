import React, {useState} from 'react';
import styles from  './App.css'
const Main = () => {
    const [value, setValue] = useState('')

    return (
        <div className='w-full h-screen flex items-center justify-center bg-blue-500' >
            <div className={'p-10 rounded-2xl border-xl bg-white border-black'}>
                <form action="">
                    <div className='flex justify-end '>
                        <input className={'text-right flex-1 text-4xl px-5 py-8 bg-gray-900 text-white'}
                               value={value} type="text"/>
                    </div>
                    <div>
                        <input className={''} type="button" value={'AC'} onClick={() => setValue('')}/>
                        <input type="button" value={'DE'} onClick={() => {setValue(value.slice(0,-1))}}/>
                        <input type="button" value={'.'} onClick={(e) => {setValue(value + e.target.value)}}/>
                        <input type="button" value={'/'} onClick={(e) => {setValue(value + e.target.value)}}/>
                    </div>
                    <div>
                        <input type="button" value={'7'} onClick={(e) => {setValue(value + e.target.value)}}/>
                        <input type="button" value={'8'} onClick={(e) => {setValue(value + e.target.value)}}/>
                        <input type="button" value={'9'} onClick={(e) => {setValue(value + e.target.value)}}/>
                        <input type="button" value={'*'} onClick={(e) => {setValue(value + e.target.value)}}/>
                    </div>
                    <div>
                        <input type="button" value={'4'} onClick={(e) => {setValue(value + e.target.value)}}/>
                        <input type="button" value={'5'} onClick={(e) => {setValue(value + e.target.value)}}/>
                        <input type="button" value={'6'} onClick={(e) => {setValue(value + e.target.value)}}/>
                        <input type="button" value={'+'} onClick={(e) => {setValue(value + e.target.value)}}/>
                    </div>
                    <div>
                        <input type="button" value={'1'} onClick={(e) => {setValue(value + e.target.value)}}/>
                        <input type="button" value={'2'} onClick={(e) => {setValue(value + e.target.value)}}/>
                        <input type="button" value={'3'} onClick={(e) => {setValue(value + e.target.value)}}/>
                        <input type="button" value={'-'} onClick={(e) => {setValue(value + e.target.value)}}/>
                    </div>
                    <div>
                        <input type="button" value={'00'} onClick={(e) => {setValue(value + e.target.value)}}/>
                        <input type="button" value={'0'} onClick={(e) => {setValue(value + e.target.value)}}/>
                        <input className={styles.ravno} type="button" value={'='} onClick={e => {setValue(eval(value))}}/>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default Main;