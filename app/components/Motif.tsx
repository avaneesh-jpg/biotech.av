import type { CSSProperties } from "react";

type Kind = "seed" | "early" | "growth";
type Side = "left" | "right";

const seedLeaves = {
  left: [
    ["M20,60 C90,20 150,50 160,110 C110,140 40,120 20,60 Z","-6deg","1","0s","var(--seed-leaf-1)",.9],
    ["M-10,220 C70,180 140,210 150,270 C90,300 20,280 -10,220 Z","4deg","1.1",".6s","var(--seed-leaf-2)",.85],
    ["M10,380 C80,340 145,365 155,420 C100,450 35,435 10,380 Z","-10deg",".9","1.1s","var(--seed-leaf-1)",.8],
    ["M-15,540 C65,500 140,525 150,585 C90,615 15,600 -15,540 Z","8deg","1.15","1.7s","var(--seed-leaf-2)",.9],
    ["M15,700 C85,665 150,690 160,745 C105,775 40,760 15,700 Z","-5deg","1",".3s","var(--seed-leaf-1)",.85],
    ["M0,20 C60,-15 120,5 130,55 C85,80 25,70 0,20 Z","7deg","1.05","2s","var(--seed-leaf-2)",.85],
    ["M5,290 C65,255 125,275 135,320 C90,345 30,335 5,290 Z","-8deg",".85",".9s","var(--seed-leaf-2)",.75],
    ["M0,620 C65,590 130,610 140,660 C90,690 20,675 0,620 Z","6deg","1","1.4s","var(--seed-leaf-2)",.8],
    ["M10,830 C75,800 140,820 150,870 C95,900 30,885 10,830 Z","-9deg",".9","2.3s","var(--seed-leaf-1)",.8],
  ],
  right: [
    ["M20,100 C90,60 155,90 165,150 C110,180 40,160 20,100 Z","5deg","1.05",".4s","var(--seed-leaf-2)",.9],
    ["M0,300 C75,260 145,290 155,345 C95,375 25,360 0,300 Z","-7deg",".95","1s","var(--seed-leaf-1)",.85],
    ["M10,500 C85,460 150,485 160,545 C100,575 30,560 10,500 Z","9deg","1.1","1.5s","var(--seed-leaf-2)",.8],
    ["M-5,680 C70,645 140,670 150,725 C90,755 20,740 -5,680 Z","-4deg","1",".8s","var(--seed-leaf-1)",.9],
    ["M10,40 C75,10 135,30 145,80 C95,105 35,95 10,40 Z","6deg",".95","1.9s","var(--seed-leaf-1)",.85],
    ["M-10,400 C60,365 130,390 140,445 C85,470 15,455 -10,400 Z","-8deg","1.05","1.2s","var(--seed-leaf-2)",.8],
    ["M5,600 C70,570 135,590 145,640 C90,665 25,650 5,600 Z","5deg",".9","2.4s","var(--seed-leaf-1)",.85],
    ["M0,820 C65,790 130,810 140,860 C85,885 20,870 0,820 Z","-6deg","1",".5s","var(--seed-leaf-2)",.85],
  ],
} as const;

const early = {
  left: {
    lines:[[40,80,110,160,"0s"],[110,160,70,260,".4s"],[70,260,150,320,".8s"],[150,320,100,430,"1.2s"],[100,430,170,510,"1.6s"],[170,510,120,620,"2s"],[120,620,60,720,"2.4s"]],
    hex:[["40,68 47.9,72.5 47.9,81.5 40,86 32.1,81.5 32.1,72.5","0s",1],["110,152 116.9,156 116.9,164 110,168 103.1,164 103.1,156",".3s",2],["70,254 75.9,257.5 75.9,264.5 70,268 64.1,264.5 64.1,257.5",".6s",1],["150,311 157.9,315.5 157.9,324.5 150,329 142.1,324.5 142.1,315.5",".9s",2],["100,424 105.9,427.5 105.9,432.5 100,436 94.1,432.5 94.1,427.5","1.2s",1],["170,501 177.9,505.5 177.9,514.5 170,519 162.1,514.5 162.1,505.5","1.5s",2],["120,613 126.9,617 126.9,625 120,629 113.1,625 113.1,617","1.8s",1],["60,714 65.9,717.5 65.9,724.5 60,728 54.1,724.5 54.1,717.5","2.1s",2]],
  },
  right: {
    lines:[[50,120,120,190,".2s"],[120,190,80,290,".6s"],[80,290,160,360,"1s"],[160,360,110,470,"1.4s"],[110,470,180,560,"1.8s"]],
    hex:[["50,111 57.9,115.5 57.9,124.5 50,129 42.1,124.5 42.1,115.5",".1s",2],["120,184 125.9,187.5 125.9,192.5 120,196 114.1,192.5 114.1,187.5",".4s",1],["80,283 86.9,287 86.9,295 80,299 73.1,295 73.1,287",".7s",2],["160,351 167.9,355.5 167.9,364.5 160,369 152.1,364.5 152.1,355.5","1s",1],["110,464 115.9,467.5 115.9,472.5 110,476 104.1,472.5 104.1,467.5","1.3s",2],["180,553 186.9,557 186.9,565 180,569 173.1,565 173.1,557","1.6s",1]],
  },
} as const;

const growth = {
  left:{path:"M30,60 L100,130 L60,220 L140,270 L90,380 L160,450 L110,560 L180,630 L120,740",main:[[30,60,100,130],[100,130,60,220],[60,220,140,270],[140,270,90,380],[90,380,160,450],[160,450,110,560],[110,560,180,630],[180,630,120,740]],branch:[[30,60,-20,30],[30,60,10,20],[60,220,10,210],[60,220,20,180],[140,270,200,240],[90,380,30,400],[90,380,40,350],[160,450,220,480],[110,560,50,590],[180,630,230,600],[120,740,60,770],[120,740,170,790]],nodes:[[30,60,4.5],[100,130,3.5],[60,220,4.5],[140,270,3.5],[90,380,4.5],[160,450,3.5],[110,560,4.5],[180,630,3.5],[120,740,4.5]],tips:[[-20,30],[10,20],[10,210],[20,180],[200,240],[30,400],[40,350],[220,480],[50,590],[230,600],[60,770],[170,790]]},
  right:{path:"M40,90 L110,160 L70,260 L150,330 L100,440 L170,520 L120,630",main:[[40,90,110,160],[110,160,70,260],[70,260,150,330],[150,330,100,440],[100,440,170,520],[170,520,120,630]],branch:[[40,90,-10,60],[70,260,20,250],[150,330,210,300],[100,440,40,460],[170,520,230,550],[120,630,60,660]],nodes:[[40,90,4.5],[110,160,3.5],[70,260,4.5],[150,330,3.5],[100,440,4.5],[170,520,3.5],[120,630,4]],tips:[[-10,60],[20,250],[210,300],[40,460],[230,550],[60,660]]},
} as const;

function SeedSide({side}:{side:Side}){
  return <svg className={`stage-motif motif-${side}`} viewBox="0 0 300 900" preserveAspectRatio="xMinYMid slice">{seedLeaves[side].map(([d,rot,scale,delay,fill,opacity],i)=><path key={i} className="leaf" style={{"--rot":rot,"--scale":scale,"--delay":delay} as CSSProperties} d={d} fill={fill} opacity={opacity}/>)}{side==="left"&&<><circle cx="60" cy="150" r="4" fill="var(--seed-accent-dot)" opacity=".6"/><circle cx="40" cy="460" r="5" fill="var(--seed-accent-dot)" opacity=".5"/><circle cx="70" cy="780" r="4" fill="var(--seed-accent-dot)" opacity=".55"/></>}</svg>;
}

function EarlySide({side}:{side:Side}){
  const data=early[side];
  return <svg className={`stage-motif motif-${side}`} viewBox="0 0 300 900" preserveAspectRatio="xMinYMid slice">{data.lines.map(([x1,y1,x2,y2,delay],i)=><line key={i} className="net-line" style={{"--delay":delay} as CSSProperties} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--ab-line)" strokeWidth="1.5"/>)}<g className="node-boost">{data.hex.map(([points,delay,tone],i)=><polygon key={i} className="hex" style={{"--delay":delay} as CSSProperties} points={points} fill={`var(--ab-node-${tone})`}/>)}</g></svg>;
}

function GrowthSide({side}:{side:Side}){
  const data=growth[side];
  return <svg className={`stage-motif motif-${side}`} viewBox="0 0 300 900" preserveAspectRatio="xMinYMid slice">{data.main.map((v,i)=><line key={`m${i}`} x1={v[0]} y1={v[1]} x2={v[2]} y2={v[3]} stroke="var(--cp-line)" strokeWidth="1"/>)}{data.branch.map((v,i)=><line key={`b${i}`} x1={v[0]} y1={v[1]} x2={v[2]} y2={v[3]} stroke="var(--cp-line)" strokeWidth=".75"/>)}<path className="streak" style={side==="right"?{animationDelay:"1.5s"}:undefined} d={data.path} fill="none" stroke="var(--cp-streak)" strokeWidth="2.5" strokeLinecap="round"/>{data.nodes.map((v,i)=><circle key={`n${i}`} className="node-boost" cx={v[0]} cy={v[1]} r={v[2]} fill="var(--cp-dot)"/>)}{data.tips.map((v,i)=><circle key={`t${i}`} cx={v[0]} cy={v[1]} r="2" fill="var(--cp-dot)" opacity=".7"/>)}</svg>;
}

export function Motif({kind}:{kind:Kind}){
  return <div className={`stage-background motif-${kind}`} aria-hidden="true">{kind==="seed"?<><SeedSide side="left"/><SeedSide side="right"/></>:kind==="early"?<><EarlySide side="left"/><EarlySide side="right"/></>:<><GrowthSide side="left"/><GrowthSide side="right"/></>}</div>;
}
