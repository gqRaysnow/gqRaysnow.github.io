/**
 随机获取名言.

 author:prd.
 version:2016.7.22
 note:名言均来自[一个](https://www.wufazhuce.com)

 使用示例(关于使用的调用,请参考最底部的函数.):
 1.先引入本js.
 2.在想使用的地方,调用getMingYan()函数即可获取名言.[getMingYanHref()获取可以跳转至One的名言,getMingYanContent():只获取名言内容]
 3.名言中存储为json数据,index对应One的每一期号,content是名言.
 4.请尊重版权,在展示名言的同时,可将名言链接至One.例如:<a href="https://wufazhuce.com/one/14">是狼是人，日久见心。</br> - </br>小饭</a>其中的14为期号.
 */
var mingyan=new Array();
mingyan.push("{'index':1165,'content':'失眠就像是，一个无人认领的梦，一段言无所向的人生，和一场明知故犯的恋情。你不愿这些发生，但你也清楚这些早晚要发生，就像终于盼来了困意，却也迎来了黎明。</br> - </br>郑执'}");
mingyan.push("{'index':1068,'content':'天青色等烟雨，而我在等你。</br> - </br>方文山'}");
mingyan.push("{'index':1048,'content':'我要一步一步往上爬，在最高点乘着叶片往前飞。小小的天留过的泪和汗，总有一天我有属于我的天。 </br> - </br>周杰伦《蜗牛》'}");
mingyan.push("{'index':235,'content':'很多事不用问值不值得，只用问，它对你来说，是不是有如珍宝。</br> - </br>柴静'}");
mingyan.push("{'index':861,'content':'我爱你，不光因为你的样子，还因为，和你在一起时，我的样子。 </br> - </br>罗伊·克利夫特'}");
mingyan.push("{'index':1064,'content':'这个世界上，从来就没有最好的，只有最合适的。比如云朵和天空，微风和草地，比如我眼中的你，以及，你眼中的我。 </br> - </br>烟波人长安《我有个恋爱想和你谈下》'}");
mingyan.push("{'index':303,'content':'我亦只有一个一生，不能慷慨赠与我不爱的人。</br> - </br>路人甲'}");
mingyan.push("{'index':755,'content':'这世界只有一种乡愁，是你不在身边的时候。 </br> - </br>my little airport'}");
mingyan.push("{'index':39,'content':'兄弟曾离去，似在公元前。今日归故里，不知是何年。</br> - </br>老树画画'}");
mingyan.push("{'index':689,'content':'愿你比别人更不怕一个人独处，愿日后谈起时你会被自己感动。</br> - </br>刘同《你的孤独，虽败犹荣》'}");
mingyan.push("{'index':1079,'content':'这个世界上最痛苦的离别方式是，从你们分开的那一刻开始，你没有办法再次走进他的生活，他却仍在你的生活中无处不在。 </br> - </br>王宇昆'}");
mingyan.push("{'index':739,'content':'恋爱的纪念物，从来就不是那些你送给我的手表和项链，甚至也不是那些甜蜜的短信和合照。恋爱最珍贵的纪念物，是你留在我身上的，如同河川留给地形的，那些你对我造成的改变。</br> - </br>蔡康永'}");
mingyan.push("{'index':666,'content':'“为什么我和我爱的人，都选择了不在乎我们的人？”“因为我们只接受自己认为配得上的爱。” </br> - </br>《壁花少年》'}");
mingyan.push("{'index':853,'content':'不管全世界所有人怎么说，我都认为自己的感受才是正确的。无论别人怎么看，我绝不打乱自己的节奏。喜欢的事自然可以坚持，不喜欢怎么也长久不了。</br> - </br>村上春树'}");
mingyan.push("{'index':790,'content':'我一直以为最糟糕的情况是你离开我，其实最令我难过的，是你不快乐。</br> - </br>《怪物旅社》'}");
mingyan.push("{'index':1154,'content':'有多少场失恋是由你喜欢上一个不喜欢你的人而开始的。</br> - </br>暖小团'}");
mingyan.push("{'index':718,'content':'我和这个世界不熟，这并非是我虚假的原因。我依旧有很多真诚，离不开，放不下，活下去，爱得起。</br> - </br>等待如果'}");
mingyan.push("{'index':553,'content':'我们都是白痴，才会这样钻牛角尖。不管是什么狗屁事，我们总是，总是，总是忘不了我们那点叫人作呕的、微不足道的自我。 </br> - </br>塞林格'}");
mingyan.push("{'index':1018,'content':'你那么擅长安慰他人，一定度过了很多自己安慰自己的日子吧。 </br> - </br>陈亚豪'}");
mingyan.push("{'index':1312,'content':'很多人觉得“爱”是比“喜欢”严重的事，不能轻易说出口。但我就是要说，我爱你。如果不能让你动心，起码吓吓你，让你无法忘记。 </br> - </br>乌冬'}");
mingyan.push("{'index':595,'content':'一生至少该有一次，为了某个人而忘了自己，不求有结果，不求同行，不求曾经拥有，甚至不求你爱我，只求在我最美的年华里，遇到你。</br> - </br>徐志摩'}");
mingyan.push("{'index':1286,'content':'如果你过得不幸福，我所做的一切才是徒劳。 </br> - </br>东野圭吾'}");
mingyan.push("{'index':629,'content':'我不要孤独，孤独是丑的，令人作呕的，灰色的。我要和你相通，共存，还有你的温暖，都是迷人的啊！可惜我不漂亮。</br> - </br>王小波《爱你就像爱生命》'}");
mingyan.push("{'index':1177,'content':'因为遇到你，我开始觉得孤单了。原来这世界上依旧有我想要得到的东西，一念之间，意识到自己活着。活着，真是寂寞。</br> - </br>陶立夏'}");
mingyan.push("{'index':404,'content':'哪里会有人喜欢孤独，不过是不喜欢失望罢了。 </br> - </br>村上春树'}");
mingyan.push("{'index':1248,'content':'我们都是一群多么可怜的人，喜欢的人得不到，得到的不珍惜，在一起的怀疑，失去的怀念，怀念的想相见，相见的恨晚，终其一生，都满是遗憾。 </br> - </br>牛轰轰'}");
mingyan.push("{'index':1132,'content':'如果我能少喜欢你一点，你会发现我是个特别好的人。有时候，爱会让人面目可憎。 </br> - </br>龚强'}");
mingyan.push("{'index':1059,'content':'喜欢一个人怎么会是这样，前一秒钟你恨不得撕碎了他，下一秒却蹲在地上边哭边捡，不知道该怎么拼起来。 </br> - </br>八月长安'}");
mingyan.push("{'index':116,'content':'生命短促，没有时间可以再浪费，一切随心自由才是应该努力去追求的，别人如何想我便是那么的无足轻重了。</br> - </br>三毛'}");
mingyan.push("{'index':460,'content':'每当我找不到存在的意义，每当我迷失在黑夜里，夜空中最亮的星，请照亮我前行。</br> - </br>逃跑计划《夜空中最亮的星》'}");
mingyan.push("{'index':622,'content':'我知道，那些夏天就像你一样回不来，我也不会再对谁满怀期待。我知道，这个世界每天都有太多遗憾。所以，你好，再见。</br> - </br>宋冬野《安和桥》'}");
mingyan.push("{'index':579,'content':'像一朵向日葵，在夜里默默地坚持，一直爱着你，用我自己的方式。</br> - </br>蓝又时《孤单心事》'}");
mingyan.push("{'index':22,'content':'爱是：看到你就开心，跟你睡在一起就满足。</br> - </br>小饭'}");
mingyan.push("{'index':247,'content':'从前的日色变得慢。车，马，邮件都慢。一生只够爱一个人。</br> - </br>木心'}");
mingyan.push("{'index':631,'content':'今夜我不关心人类，我只想你。</br> - </br>海子'}");
mingyan.push("{'index':1139,'content':'去过的地方越多，越知道自己想回到什么地方去。见过的人越多，越知道自己真正想待在什么人身边。 </br> - </br>夏正正'}");
mingyan.push("{'index':893,'content':'你在我身边也好，在天边也罢，想到世界的角落有一个你，觉得整个世界也变得温柔安定了。</br> - </br>琦殿'}");
mingyan.push("{'index':893,'content':'你在我身边也好，在天边也罢，想到世界的角落有一个你，觉得整个世界也变得温柔安定了。</br> - </br>琦殿'}");
mingyan.push("{'index':633,'content':'你都如何回忆我，带着笑或是很沉默，这些年来有没有人能让你不寂寞。</br> - </br>《后来》'}");
mingyan.push("{'index':706,'content':'你在南方的艳阳里，大雪纷飞，我在北方的寒夜里，四季如春，如果天黑之前来得及，我要忘了你的眼睛，穷极一生，做不完一场梦。</br> - </br>马頔《南山南》'}");
mingyan.push("{'index':770,'content':'我喜欢你，我不难过；我希望你也喜欢我，我才难过。 </br> - </br>八月长安'}");
mingyan.push("{'index':637,'content':'希望你可以记住我，记住我这样活过，这样在你身边呆过。</br> - </br>《挪威的森林》'}");
mingyan.push("{'index':842,'content':'你在乎谁，你说了算。谁在乎你，你说了不算，时间说了算。</br> - </br>郑执'}");
mingyan.push("{'index':610,'content':'你爱上一个人的那个瞬间，是会永远永远留在心里的，这瞬间，便是生活的勇气，便是黑夜里点亮的一盏明灯。</br> - </br>《东京爱情故事》'}");
mingyan.push("{'index':518,'content':'你走，我不送你。你来，无论多大风多大雨，我要去接你。</br> - </br>梁实秋'}");
mingyan.push("{'index':940,'content':'春风沉醉的夜晚，遇见过你，从此东西南北风一样了，清晨也是夜晚了，不想你也是想你了。</br> - </br>郑执'}");
mingyan.push("{'index':115,'content':'尽管有天我们会变老，老得可能都模糊了眼睛，但是我要写出人间最美丽的歌送给你。</br> - </br>陈升《不再让你孤单》【往期精选】'}");
mingyan.push("{'index':403,'content':'每一个黄昏，都有我爱你的影子。</br> - </br>jaycee'}");
mingyan.push("{'index':402,'content':'希望是件好东西，也许是世上最好的东西。好东西从来不会流逝。</br> - </br>《肖申克的救赎》'}");


/**
 随机获取名言.

 直接调用此函数即可.
 */
function getMingYan(){
    return (mingyan[parseInt(Math.random()*(mingyan.length-1)+1)]);
}

/*
  获取名言,并链接至One.
*/
function getMingYanHref(){
    var item = getItem();
    return "<a href='https://wufazhuce.com/one/"+item.index+"' target='_blank'>"+item.content+"</a>";
}

function getItem(){
    return eval('(' +(mingyan[parseInt(Math.random()*(mingyan.length-1)+1)])+ ')');
}

/*
  只获取内容.
*/
function getMingYanContent(){
    var item = getItem();
    return item['content'];
}