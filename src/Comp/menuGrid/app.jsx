import React from 'react'
import { ExpandableCardDemo1 } from './index1'
import {ExpandableCardDemo2} from './index2'
import {ExpandableCardDemo3} from './index3'
import {ExpandableCardDemo4} from './index4'
import {ExpandableCardDemo5} from './index5'
const MenuMain = () => {
  return (
    <div>
      <h1 className='p-8 tracking-[20px] text-6xl flex justify-center items-center text-[#c3a26c]'>VIDEOS</h1>
     <ExpandableCardDemo1/>
     <hr className="bg-zinc-700 h-[1px] border-0" />
      <ExpandableCardDemo2/>
      <hr className="bg-zinc-700 h-[1px] border-0" />
      <ExpandableCardDemo3/>
      <hr className="bg-zinc-700 h-[1px] border-0" />
      <ExpandableCardDemo4/>
      <hr className="bg-zinc-700 h-[1px] border-0" />
      <ExpandableCardDemo5/>
      <hr className="bg-zinc-700 h-[1px] border-0" />
    </div>
  )
}

export default MenuMain