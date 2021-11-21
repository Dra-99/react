import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import "./App.css"
import RouteGuard from './RouteGuard';
import scrollWithAnimate from './util/scrollWithAnimate'
// import withScrollReset from './withScrollReset'
// import useScrollAnimate from './useScrollAnimate'

function Page1(props) {
    // useScrollAnimate(props.location.pathname);
    return (<div className="page">
        最新出版的《中国统计年鉴2021》显示，2020年全国人口出生率为8.52‰，首次跌破10‰，而同期人口自然增长率仅为1.45‰。这是否意味着人口负增长将提前来临？如何促进人口长期均衡发展？

“受经济社会环境变化、生育养育子女的直接和间接成本攀升、劳动就业形态发生改变等综合因素影响，近些年我国居民对婚姻和生育的观念以及相关行为正在发生变化，晚婚、晚育、不婚、不育人群逐渐增多，叠加育龄人口规模下降，导致我国近些年的人口出生率有所下降。”国务院发展研究中心社会发展研究部研究员冯文猛说。

近年来，欧洲、美国、日本、韩国等国人口出生率持续位于低位水平，低人口出生率已成为全球多国人口发展的普遍趋势。冯文猛说，未来随着经济社会发展，尤其是工业化、城镇化带来的生活方式和婚育观念转变，我国人口出生率可能会在较长时间内维持低位。

不过，冯文猛说，判断人口是否进入负增长，取决于人口出生数和死亡数之比。从长期来看，人口出生率在维持低位之时，随着医疗水平进步及社会保障水平不断提升，人口死亡率往往也将维持在低位。仅凭2020年这一年人口出生数据，现在还很难说中国人口负增长已提前来临。

“根据国家统计局的有关调查，我国育龄妇女的生育意愿子女数为1.8，只要做好相应的支持措施，实际存在的生育潜力就能发挥出来。”国家统计局局长宁吉喆此前表示。

记者采访多位专家表示，当前，我国人口总量仍居世界第一，预计在未来一段时间内，我国人口总量会保持在14亿人以上。

“也要看到，这两年的人口走势除了受到生育观念变化等长期因素影响外，疫情也对人口发展趋势带来了不确定性，如何尽快克服疫情影响，保障人口长期均衡发展也是当务之急。”冯文猛说。

低人口自然增长率暴露出我国人口发展压力，与此同时，我国人口结构性问题也进一步突显。

第七次全国人口普查结果显示，我国劳动年龄人口下降，人口老龄化逐步加速。与2010年相比，我国劳动年龄人口减少4000多万人；60岁及以上人口数量比重为18.70%，与2010年相比上升5.44个百分点。
最新出版的《中国统计年鉴2021》显示，2020年全国人口出生率为8.52‰，首次跌破10‰，而同期人口自然增长率仅为1.45‰。这是否意味着人口负增长将提前来临？如何促进人口长期均衡发展？

“受经济社会环境变化、生育养育子女的直接和间接成本攀升、劳动就业形态发生改变等综合因素影响，近些年我国居民对婚姻和生育的观念以及相关行为正在发生变化，晚婚、晚育、不婚、不育人群逐渐增多，叠加育龄人口规模下降，导致我国近些年的人口出生率有所下降。”国务院发展研究中心社会发展研究部研究员冯文猛说。

近年来，欧洲、美国、日本、韩国等国人口出生率持续位于低位水平，低人口出生率已成为全球多国人口发展的普遍趋势。冯文猛说，未来随着经济社会发展，尤其是工业化、城镇化带来的生活方式和婚育观念转变，我国人口出生率可能会在较长时间内维持低位。

不过，冯文猛说，判断人口是否进入负增长，取决于人口出生数和死亡数之比。从长期来看，人口出生率在维持低位之时，随着医疗水平进步及社会保障水平不断提升，人口死亡率往往也将维持在低位。仅凭2020年这一年人口出生数据，现在还很难说中国人口负增长已提前来临。

“根据国家统计局的有关调查，我国育龄妇女的生育意愿子女数为1.8，只要做好相应的支持措施，实际存在的生育潜力就能发挥出来。”国家统计局局长宁吉喆此前表示。

记者采访多位专家表示，当前，我国人口总量仍居世界第一，预计在未来一段时间内，我国人口总量会保持在14亿人以上。

“也要看到，这两年的人口走势除了受到生育观念变化等长期因素影响外，疫情也对人口发展趋势带来了不确定性，如何尽快克服疫情影响，保障人口长期均衡发展也是当务之急。”冯文猛说。

低人口自然增长率暴露出我国人口发展压力，与此同时，我国人口结构性问题也进一步突显。

第七次全国人口普查结果显示，我国劳动年龄人口下降，人口老龄化逐步加速。与2010年相比，我国劳动年龄人口减少4000多万人；60岁及以上人口数量比重为18.70%，与2010年相比上升5.44个百分点。
    </div>)
}

function Page2(props) {
    // useScrollAnimate(props.location.pathname);

    return <div className="page">
        2020年11月10日，北京市丰台区东高地街道万源南里社区的人口普查人员准备进行上门登记。

人口问题始终是“国之大者”，处理好人口规模和结构的关系至关重要。

面对新时期人口发展形势和人口变化趋势，“十四五”规划和2035年远景目标纲要提出，制定人口长期发展战略，优化生育政策，以“一老一小”为重点完善人口服务体系，促进人口长期均衡发展。

今年7月发布的《中共中央国务院关于优化生育政策促进人口长期均衡发展的决定》提出，修改人口与计划生育法，提倡适龄婚育、优生优育，实施三孩生育政策。

全国政协人口资源环境委员会副主任、中国计划生育协会常务副会长王培安认为，“生好小”和“养好老”是一个问题的两个方面，当前，既要落实好三孩生育政策及配套支持措施，推动实现适度生育水平，也要实施好积极应对人口老龄化国家战略，构建老年友好型社会。

探索实施父母育儿假，依托社区发展普惠托育服务；健全老龄工作政策、制度和工作机制，推动老龄事业和产业高质量发展……有关部门正在积极发力，推动人口和经济社会持续协调、健康发展。

冯文猛说，从长期来看，促进人口长期均衡发展，要着重做好三方面工作：一是要进一步完善人口生育政策及配套措施，尤其要尽可能降低生育、养育和教育成本，提高优生优育服务水平；二是要创造条件，稳步推进延迟退休等政策改革，鼓励中老年人更好发挥作用；三是要提升国民教育水平和全民健康水平，不断提高人口素质，挖掘人才红利。

“未来，应在新发展理念指引下，从经济社会发展全局高度和国家中长期发展层面谋划人口发展，以系统思维和整体布局最大限度地发挥人口要素对社会经济发展的支撑作用，加快构建人口长期均衡发展及其与经济社会、资源环境协调发展的新人口发展格局。”北京大学人口研究所所长陈功说。
最新出版的《中国统计年鉴2021》显示，2020年全国人口出生率为8.52‰，首次跌破10‰，而同期人口自然增长率仅为1.45‰。这是否意味着人口负增长将提前来临？如何促进人口长期均衡发展？

“受经济社会环境变化、生育养育子女的直接和间接成本攀升、劳动就业形态发生改变等综合因素影响，近些年我国居民对婚姻和生育的观念以及相关行为正在发生变化，晚婚、晚育、不婚、不育人群逐渐增多，叠加育龄人口规模下降，导致我国近些年的人口出生率有所下降。”国务院发展研究中心社会发展研究部研究员冯文猛说。

近年来，欧洲、美国、日本、韩国等国人口出生率持续位于低位水平，低人口出生率已成为全球多国人口发展的普遍趋势。冯文猛说，未来随着经济社会发展，尤其是工业化、城镇化带来的生活方式和婚育观念转变，我国人口出生率可能会在较长时间内维持低位。

不过，冯文猛说，判断人口是否进入负增长，取决于人口出生数和死亡数之比。从长期来看，人口出生率在维持低位之时，随着医疗水平进步及社会保障水平不断提升，人口死亡率往往也将维持在低位。仅凭2020年这一年人口出生数据，现在还很难说中国人口负增长已提前来临。

“根据国家统计局的有关调查，我国育龄妇女的生育意愿子女数为1.8，只要做好相应的支持措施，实际存在的生育潜力就能发挥出来。”国家统计局局长宁吉喆此前表示。

记者采访多位专家表示，当前，我国人口总量仍居世界第一，预计在未来一段时间内，我国人口总量会保持在14亿人以上。

“也要看到，这两年的人口走势除了受到生育观念变化等长期因素影响外，疫情也对人口发展趋势带来了不确定性，如何尽快克服疫情影响，保障人口长期均衡发展也是当务之急。”冯文猛说。

低人口自然增长率暴露出我国人口发展压力，与此同时，我国人口结构性问题也进一步突显。

第七次全国人口普查结果显示，我国劳动年龄人口下降，人口老龄化逐步加速。与2010年相比，我国劳动年龄人口减少4000多万人；60岁及以上人口数量比重为18.70%，与2010年相比上升5.44个百分点。
    </div>
}

// const Page1Wrapper = withScrollReset(Page1);
// const Page2Wrapper = withScrollReset(Page2);

export default function App() {
    return (
            <RouteGuard onChange={(prevLocation, location) => {
                if(prevLocation.pathname !== location.pathname) {
                    scrollWithAnimate()
                }
            }} onBeforeChange={(prevLocation, curLocation, oAction, unBlock, cb, msg) => {
                cb(true);
            }}> 
                <NavLink to="/page1">页面1</NavLink>
                <NavLink to="/page2">页面2</NavLink>
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2}/>
            </RouteGuard>
    )
}
