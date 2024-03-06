let insertions = [[21, 27], [133, 134], [322, 324], [560, 562], [2267, 2268], [2350, 2351], [2399, 2400], [2506, 2507], [2641, 2642], [2664, 2665], [2876, 2877], [2893, 2898], [3199, 3200], [3286, 3287], [3406, 3407], [3409, 3410], [3463, 3464], [3504, 3505], [3721, 3722], [3868, 3869], [3916, 3917], [3962, 3965], [3996, 3997], [4088, 4092], [4264, 4265], [4281, 4282], [4443, 4444], [4496, 4497], [4743, 4744], [4971, 4972], [4983, 4984], [5016, 5017], [5058, 5060], [5109, 5110], [5409, 5410], [5446, 5447], [5622, 5624], [5722, 5723], [5744, 5751], [5772, 5773], [5885, 5887], [6113, 6114], [6935, 6936], [6971, 6973], [7168, 7169], [7338, 7340], [7411, 7428], [7448, 7449], [7632, 7633], [7640, 7642], [7694, 7695], [8085, 8086], [8170, 8173], [8188, 8189], [8249, 8250], [8305, 8306]]
let deletions = [[9, 11], [101, 113], [157, 158], [197, 205], [216, 217], [243, 251], [278, 279], [280, 281], [292, 297], [307, 308], [309, 311], [314, 318], [488, 489], [519, 521], [564, 565], [577, 579], [584, 590], [614, 615], [672, 673], [745, 748], [820, 832], [839, 849], [851, 854], [856, 857], [1053, 1056], [1064, 1066], [1069, 2220], [2221, 2223], [2262, 2263], [2265, 2266], [2270, 2272], [2294, 2295], [2330, 2331], [2372, 2374], [2376, 2392], [2402, 2441], [2442, 2448], [2449, 2454], [2467, 2469], [2502, 2503], [2509, 2515], [2522, 2523], [2613, 2614], [2723, 2728], [2746, 2747], [2821, 2823], [2830, 2832], [2839, 2841], [2886, 2890], [2901, 2902], [2915, 2929], [2932, 2934], [2938, 2940], [3041, 3042], [3085, 3086], [3190, 3191], [3211, 3213], [3215, 3223], [3238, 3239], [3272, 3274], [3362, 3364], [3380, 3389], [3432, 3434], [3441, 3446], [3451, 3453], [3484, 3489], [3523, 3525], [3579, 3581], [3613, 3614], [3615, 3616], [3627, 3629], [3663, 3665], [3680, 3682], [3797, 3798], [3830, 3834], [3861, 3862], [3885, 3886], [3912, 3914], [3991, 3995], [4012, 4014], [4026, 4028], [4032, 4038], [4052, 4082], [4095, 4096], [4102, 4105], [4114, 4116], [4124, 4130], [4144, 4145], [4146, 4152], [4158, 4159], [4163, 4164], [4176, 4198], [4206, 4209], [4235, 4236], [4247, 4248], [4299, 4300], [4365, 4366], [4470, 4471], [4472, 4479], [4480, 4484], [4490, 4492], [4514, 4516], [4597, 4616], [4648, 4650], [4670, 4671], [4682, 4692], [4750, 4766], [4785, 4793], [4797, 4800], [4867, 4869], [4875, 4881], [4977, 4978], [4992, 4995], [5063, 5064], [5068, 5070], [5083, 5095], [5106, 5107], [5175, 5176], [5206, 5207], [5267, 5285], [5300, 5301], [5326, 5330], [5363, 5365], [5385, 5386], [5394, 5398], [5448, 5449], [5485, 5512], [5519, 5521], [5524, 5525], [5586, 5587], [5597, 5605], [5617, 5620], [5654, 5655], [5674, 5682], [5685, 5687], [5689, 5690], [5756, 5757], [5762, 5764], [5830, 5832], [5834, 5836], [5855, 5856], [5960, 5961], [6009, 6011], [6024, 6025], [6051, 6056], [6115, 6116], [6141, 6169], [6206, 6219], [6236, 6239], [6247, 6248], [6252, 6256], [6273, 6621], [6622, 6759], [6789, 6790], [6802, 6808], [6816, 6820], [6864, 6899], [6913, 6917], [6929, 6930], [6940, 6954], [6965, 6967], [7012, 7022], [7055, 7057], [7103, 7145], [7149, 7150], [7156, 7157], [7347, 7380], [7445, 7446], [7488, 7508], [7549, 7553], [7559, 7561], [7575, 7577], [7578, 7588], [7665, 7666], [7696, 7697], [7820, 7832], [7847, 7882], [7904, 7907], [7943, 7944], [7952, 8071], [8166, 8167], [8321, 8323], [8355, 8357], [8360, 8361]]
let mutations = [[27, 70], [71, 83], [113, 114], [138, 139], [158, 160], [170, 171], [226, 227], [238, 239], [275, 276], [324, 326], [371, 372], [389, 390], [432, 433], [443, 444], [452, 453], [467, 468], [474, 475], [509, 510], [539, 541], [553, 554], [596, 597], [670, 671], [685, 687], [725, 726], [832, 835], [854, 855], [885, 887], [902, 903], [1056, 1061], [2223, 2224], [2296, 2297], [2392, 2393], [2484, 2485], [2523, 2525], [2532, 2533], [2535, 2536], [2551, 2552], [2593, 2595], [2635, 2636], [2657, 2658], [2666, 2669], [2670, 2671], [2793, 2794], [2851, 2852], [2898, 2900], [2902, 2904], [2908, 2914], [2929, 2931], [2940, 2968], [2975, 2977], [3017, 3018], [3057, 3058], [3200, 3201], [3466, 3467], [3475, 3476], [3489, 3490], [3517, 3518], [3564, 3565], [3596, 3597], [3672, 3674], [3688, 3689], [3746, 3747], [3780, 3781], [3804, 3806], [3821, 3822], [3862, 3863], [3876, 3877], [3907, 3908], [3917, 3918], [3919, 3920], [3940, 3941], [3958, 3959], [3983, 3984], [4019, 4020], [4022, 4023], [4039, 4040], [4105, 4106], [4133, 4134], [4152, 4153], [4159, 4160], [4202, 4203], [4204, 4205], [4236, 4237], [4265, 4266], [4282, 4283], [4367, 4368], [4439, 4440], [4468, 4469], [4616, 4617], [4624, 4625], [4650, 4655], [4671, 4672], [4714, 4715], [4740, 4741], [4766, 4767], [4776, 4777], [4800, 4803], [4881, 4884], [4904, 4905], [4948, 4949], [4972, 4973], [4974, 4975], [5017, 5018], [5021, 5022], [5041, 5042], [5043, 5044], [5064, 5066], [5075, 5076], [5130, 5132], [5301, 5302], [5398, 5399], [5405, 5406], [5410, 5411], [5423, 5424], [5521, 5522], [5543, 5544], [5577, 5579], [5607, 5608], [5773, 5774], [5790, 5791], [5824, 5825], [5836, 5837], [5856, 5857], [5861, 5862], [5977, 5978], [5979, 5980], [6025, 6027], [6177, 6179], [6182, 6183], [6201, 6202], [6219, 6220], [6245, 6246], [6791, 6792], [6830, 6831], [6855, 6857], [6860, 6861], [6957, 6958], [6959, 6960], [6967, 6968], [6969, 6970], [6981, 6982], [6992, 6993], [7084, 7085], [7100, 7101], [7169, 7170], [7176, 7177], [7180, 7181], [7233, 7234], [7239, 7240], [7246, 7247], [7265, 7266], [7287, 7288], [7300, 7302], [7393, 7394], [7438, 7439], [7446, 7447], [7515, 7516], [7633, 7639], [7642, 7643], [7670, 7671], [7747, 7748], [7832, 7833], [7886, 7889], [7893, 7896], [7935, 7936], [8080, 8081], [8086, 8087], [8093, 8094], [8098, 8099], [8114, 8115], [8120, 8121], [8173, 8178], [8199, 8200], [8203, 8204], [8255, 8256], [8294, 8295]]
let textlength = 8407
let text1 = '第七十一回李瓶儿何千户家托梦提刑官引奏朝仪      整时罢鼓膝间琴闲把筵篇阅古今常叹贤君务勤俭深悲痛主事荒臣治平端目亲贤恪稔乱无龙近侫臣说破兴亡多少事高山流水有知音话说西门庆同何千户回来走到大街何千户先差人去回何太监话去了一面邀请西门庆到家一饭西门庆再三固辞何千户 手下把马嚼拉住说道学生还有一事与长官商议于是并马相行到宅前下马贲四同抬盒径往崔中书家去了原来何千户盛陈酒筵在家等候进入厅上但见屏开孔雀褥隐芙蓉兽炭焚烧金炉香霭正中独独设一席下边一席相陪傍边东首又设一席皆盘堆异菓花插金瓶卓椅鲜明帏屏齐整西门庆问道长官今日筵何客何千户道家公公今日下班敢与长官叙一中饭西门庆道长官这等费心盛设待学生就不是同僚之情何千户笑道倒是家公公主意治此粗酌屈尊  请教一面看茶吃了西门庆请老公公拜见何千户道家公公便出来不一时何太监从后边出来穿着绿绒蟒衣冠帽皂靴宝石绦环西门庆展拜四拜请公公受礼何太监不肯说道使不的西门庆道学生与天泉同寅晚辈老公公齿德俱尊又系中贵自然该受礼讲了半日何太监受了半礼让西门庆上面他主席相陪何千户傍坐西门庆道老公公这个断然使不的同僚之间岂可傍坐老公公叔侄便罢了学生使不了的何太监大喜道大人甚是知礼罢罢我阁老位儿傍坐罢教做官的陪大人主席就是了西门庆道这等学生坐的也安于是各叙礼坐下何太监道小的儿们再烧好炭来今日天气  寒冷些须臾左右火池火叉拿上一包暖阁水磨细炭向中间四方黄铜火盆内只一倒斤前放下油纸暖帘来日光掩映十分明亮何老太监道大人请宽了盛服罢西门庆道学生里边没穿甚么衣服使小价下处取来何太监道不消取去令左右接了衣服拿我穿的飞鱼绿绒敞衣衣来与大人披上西门庆笑道老公公职事之服学生何以穿得何太监道大人只顾穿怕怎的昨日万岁赐了我蟒衣我也不穿他了就迸了大人遮衣服儿罢不一时左右取上来西门庆捏了带令玳安接去员领披上氅衣作揖谢了又请何千户也宽去上盖陪坐又拿上一道茶来吃了何太监道叫小厮们来原来家中教了十二名吹打的小厮两个师范领着上来磕头何太监付抬出铜锣铜鼓放在厅前一面吹打动起乐来端的声震云霄韵惊鱼鸟然后左右伺候酒筵上坐何太监亲自把盏西门庆慌道老公公请尊便有长官代劳只安放锺筯儿就是一般何太监道我与大人递一锺儿我家做官的初入芦苇不知深浅望乞大人凡事扶持一二就是情了西门庆道老公公说那里话常言同僚三世亲学生亦托赖老公公余光岂不同力相助何太监道好说好说共同王事彼此扶持西门庆也没等他递酒只接了杯儿领到席上随即回奉一杯安在何千户并何太监席上彼此告揖过坐下吹打毕三个小厮连师范在筵前银筝象板三弦琵琶唱了一套正宫端正好水晶宫鲛绡帐光射水晶宫冷透鲛绡帐夜深沉睡不稳龙床离金门私出天街上正风雪空中降滚绣球似纷纷蝶翅飞如漫漫柳絮狂舞冰花旋风儿飘荡践玉玷脚步儿匆忙将白襕两袖遮把乌纱小帽荡猛回头凤楼凝望全不见碧琉璃瓦甇鸳鸯一霎时九重殿如银砌半合儿万里乾坤似玉妆恰便是粉甸满封疆倘秀才我只见铁桶般重门闭我将这铜兽面双环扣响敲门的我是万岁山前赵大郎堂中无客伴灯下看文章特来听讲呆骨朵冲寒风冒冻雪来相望有些个机密事紧要商量忙怎么了事公人免礼咱招贤宰相这的鼎鼐三公府那里也剃头发唐三藏这坐席间听讲书你休来耳边厢叫点汤倘秀才朕不学汉高皇身居未央朕不学唐天子停眠在晋阳常则是翠被生寒金凤凰有心传说无梦到高唐这的是为君的勾当滚绣球虽然与四海为一人必索要正三纲谨五常朕的年广学鎗棒恨则恨未曾到孔子门墙尚书是几篇毛诗共几章讲礼记始知谦让论春秋可鉴兴亡朕待学禹汤文武宗尧舜卿可及房杜萧曹立汉唐则要你爕理阴阳倘秀才卿道是用论语治朝廷有方却原来这半部运山河在掌圣道如天不可量谈经临绛帐索强如开宴出红妆听说罢神清气爽滚绣球银台上华烛明金炉内宝篆香不当烦教老兄自斟佳酿又何须嫂嫂亲捧着霞觞卿道是糟糠妻不下堂朕须想贫贱交不可忘常言道表壮不如里壮妻若贤夫免灾殃朕将卿如太甲逢伊尹卿得嫂壮呵恰便是梁鸿配孟光则愿你福寿绵长倘秀才但歇息呵论前王后王恰合眼虑兴邦丧邦因此上晓夜无眠想万方虽不是欢娱嫌夜短遭难道寂寞恨更长忧愁事几庄滚绣球忧则忧当站的身无挂体忧则忧家无隔宿粮忧则忧甘贫的昼眠深巷忧则忧读书的夜寐寒窗忧则忧嚎寒妻怨夫啼忧则忧驾车的恁时分万里行商忧则忧行般的一江风浪忧则忧饥子呼娘忧则忧是布衣贤士无活计忧则忧铁甲忙披守战场题将来感叹悲伤倘秀才忧的是百姓苦向御榻心劳意攘害的是不小可教寡人眠思梦想太原府刘素拒北方我只待暂离丹凤阙亲拥碧油幢先取那河东的上党滚绣球卿道是钱王共李王刘鋹与孟昹他每多无仁政着万民失翼行霸道百姓遭殃差何人镇守西命何人定两广取吴越必须名将下江南直用忠良要定夺展江山白玉擎天柱索用恁极宇宙黄金驾海梁仔细端详脱布衫取金陵飞渡长江到钱塘平定他乡西川休辞栈恧南蛮地莫愁烟瘴醉太平阵冲开虎狼身冒着风霜用六韬三略定边疆把元戎印掌则要你人披铁甲添雄壮马摇玉勒难遮当鞭敲金革登响叮当早班师汴梁煞有那等顺天心达天理去邪归正有疎放有那等霸王业抗王师扬威尽灭亡休掳掠民财休伤残民命休淫污民妻休烧毁民房恤军马施仁立法实钱粮定赏罚保城池讨逆招安沿路上安民挂榜从赈济任开仓尾声朕专待正衣冠尊相貌就凌烟图画你那功臣像卿幕宾立金石铭锺鼎向青史标题姓字香能用兵善为将有心机有胆量仰瞻天文等星象俯察山川变形状决战方将九地量画戟须将旗帜张夜战须将火鼓扬步战屯云护军帐水战随风使帆桨奇正相生兵最强仁勇之行勇怎当耳听将军定这厢坐拟元戎取那厢飞奏边庭进表章齐贺升平回帝乡比及你列土分茅拜卿相先将你各部下的军卒重重的赏唱了一套下去酒过数巡食割两道看看天晚秉上灯来西门庆唤玳安拿赏赐与厨役并吹打各色人役就要起身回说 学生不当厚扰一日了就此告回那公公那里肯放说道我今日正是下斑要与大人请教有甚大酒席只是清坐而已教大人受饥西门庆道承老公公赐这等大美馔如何反言受饥学生回去歇息歇息明早还 与天泉参谒参谒兵科好领札付挂号何太监道既是如此大人何必又回下处就在我这里歇了罢明早好与我家做官的 干事敢问如今下处在那里西门庆道学生就暂借敝同僚夏龙溪令亲崔中书宅中权寓行李都在那边何太监道这等也不难大人何不令人把行李搬过来我家住两日何如我这后园儿里有几间小房儿甚是僻净就早晚和做官的理会些公事儿也方便些儿强如在 人家这个就是一家西门庆道在这里也罢了只是使夏公见怪的学生疎他一般何太监道没的说如今时年早辰不做官晚夕不唱喏衙门是恁偶戏衙门虽故当初与他同僚今日前官已去后官接管承行与他就无干怎生这等说他就是个不知道理的人了今日我定然要和大人坐一夜不放大人去唤左右下边房里快放卓儿管待你西 老爹大官儿饭酒我家差几个人跟他实时把行李都搬 来了分付打发后花园西院干净预备铺陈炕中笼下炭火堂上一呼阶下百诺答应下去了西门庆道老公公盛情只是学生得罪夏公了何太监道没的扯淡哩他既出了衙门不在其位不谋其政他管他那里銮驾库的事管不的咱提刑所的事了难怪于你不由分说就打发玳安并马上人吃了酒饭差了几名军牢各拿绳扛径往崔中书家搬取行李去了何太监道又一件相烦大人我家做官的若是到任所还望大人那里替他看所宅舍儿然后好搬取家小今先教他同夫人去待寻下宅子然后打发家小起身也不多连几房家人也 有二三十口西门庆道天泉去了老公公     这宅子谁看守何太监道我两个名下官儿第二个侄儿何永福见在庄子上叫他来住了罢西门庆道老公公分付要看多少银子宅舍何太监道也得千金出外银子的房儿纔勾住一举两得其便甚好门面七间到底五层仪门进去大厅两边厢房鹿角顶后边住房花亭周围群房也有许多街道又宽阔只好天泉住何太监道他要许多价值儿西门庆道他对我说来原是一千三百两又后边添盖了一层半房收拾了一处花亭老公公若要随公公与他多少罢了何太监道我乃托大人随大人主张就是了趁今日我在家差个人和他说去讨他那原文书我瞧瞧难得寻下这房舍儿我家做官的去到那里就有个归着了不一时只见玳安同众人搬了行李来回话西门庆问贲四王经来了不曾玳安道王经同押了衣箱行李先来了还有轿子又叫贲四在那里看守 者西门庆因附耳低言如此如此这般这般分付拿我帖儿上覆夏老爹借过那里房子的原契来与何公公要瞧瞧就同贲四一答儿来这玳安应的去了不一时贲四青衣小帽同玳安前来拿文书回西门庆说夏老爹多 上覆既是何公公要怎好说价钱原文书都拿的来了又收拾添盖使费了许多随爹主张了罢西门庆把原契递与何太监亲看了一遍见上面写着一千二百两说道这房儿想必也住了几年里面未免有些糟烂也别要说收拾大人面上我家做官的既治产业还与他原价那贲四连忙跪下说何爷说的 自古 使的憨钱治的庄田千年房舍换百主一番拆洗一番新把这何太监听了喜欢的要不的便道你是那里的此人倒会说话儿常言成大 者不借小费其实说的是他叫甚么名字西门庆道此是舍下伙计名唤贲四何太监道也罢没个中人 你就做个中人儿替我讨了文契来今日是个上官好日期就把银子兑与他罢西门庆道如今晚了待的明日也罢了何太监道到五更我早进去明日太朝今日不如先交与他银子就了事而已西门庆问道明日甚时驾出何太监道午时驾出到坛三更鼓祭了寅正一刻就回到宫里摆了膳就出来设朝升大殿又受朝贺天下诸司都上表拜冬次日文武百官吃庆成宴你每是外任官大朝引奏过就没你每事了说毕何太监分付何千户进后边连忙打点出二十四定大元宝来用食盒抬着差了两个家人同贲四玳安押送到崔中书家交割夏公见 了银子来满心欢喜随即亲手写了文契付与贲四等拿来递与何太监不胜欢喜赏了贲四十两银子玳安王经每人三两西门庆道小孩子家不当与他何太监道胡乱与他买嘴儿吃三人磕了头谢了何太监分付管待酒饭又向西门庆唱了两个喏全于大人余光西门庆道岂有此理还是看老公公金面何太监道还望大人对他说说早把房儿腾出来这里好打发家小 身西门庆道学生已定与他说教他早腾何长官这一去且在衙门公廨中权住几日待他家小搬取京收拾了这里长官 小起是不迟何太监道收拾直待过年罢了先打发家小去纔好十分在衙门中也不方便说话之间已有二更天气   说道老公公请安置罢学生亦不胜酒力了何太监方作辞归后边暖房内宿歇 去了何千户教家乐弹唱还与西门庆投壸吃了一回方纔起身归至后园正北三间书院四面都是粉墙台柳湖山盆景花木房内绛烛高烧迭席床帐锦幔倭金屏护琴书几席清幽翠帘低挂铺陈整齐炉上茶煮宝瓶篆内香焚麝饼    何千户又陪西门庆叙话良久小童看茶吃了方道安置起身归后边去了西门庆向了回火方纔摘去冠帽解衣就寝王经玳安打发脱了靴袜合了灯烛自往下边暖炕被褥歇去了这西门庆有酒的人睡在枕畔见都是绫锦被褥貂鼠绣帐火箱泥金暖阁床在被窝里见满窗月色番来覆去睡不着良久只闻夜漏沉沉花阴寂寂寒风吹得那窗纸有声况离家已久欲待要呼王经进来陪他睡忽然听得窗外有妇人语声甚低即披衣下床 靸着鞋袜悄悄启户视之只见李瓶儿雾 鬓云鬟淡妆丽雅素白旧衫笼雪体淡黄软软袜衬弓鞋轻移莲步立于月下西门庆一见挽之入室相抱而哭说道冤家你如何在这里李瓶儿道奴寻访至此对你说我已寻了房儿了今特来见你一面早晚便搬取去也西门庆忙问道你房儿在于何处李瓶儿道咫尺不远出此大街迤东造釜巷中间便是言讫西门庆共他相偎相抱上床云雨不胜美快之极已而整衣扶髻徘徊不舍李瓶儿叮咛嘱付西门庆 我的哥哥切记休贪夜饮早早回家那厮不时伺害于你千万忽忘此言是必记于心者言讫撒手而别挽西门庆相送到家走出大街 见月色如昼果然往东转过牌坊到一小巷旋踵见一座双扇白板门指道此奴之家也言毕顿袖而入西门庆急向前拉之恍然惊觉乃是南柯一梦但见月影横窗花枝倒影矣西门庆向褥底摸了摸见精流满席余香在被残唾犹甜追悼莫及悲不自胜正正时世间好物不坚牢彩云易散琉璃脆有诗为证玉宇微茫霜满襟疎窗淡月梦魂惊凄凉睡到无聊处恨杀寒鸡不肯鸣西门庆番来覆去盼鸡叫巴不得天亮比及天亮又睡着了次日清辰何千户家童仆起来伺候拿洗面汤手巾王经玳安打发西门庆梳洗毕何千户又早出来陪侍吃了姜茶放卓儿请吃粥西门庆问老公公怎的不见何千户道家公公从五更鼓进内 了须臾拿上粥围着火盆四碟齐整小菜四大碗熬烂下饭吃了粥又拿上一盏肉员子馄饨鸡蛋头脑汤金匙银厢雕添茶锺一面吃着分付出来伺候备马何千户与西门庆冠冕仆从跟随早进内参见兵科出来何千户便分路来家西门庆又到相国寺拜智云长老长老又留摆斋西门庆只吃了一个点心余者收下来与手下人吃了玳安毡包内拿着金段从东街穿过来要往崔中书家拜夏龙溪去因从造府巷所过中间果见有双扇白板门与梦中所见一般悄悄使玳安问隔壁卖豆腐老姬此家姓甚名谁老姬答道乃袁指挥家也西门庆于是不胜叹异到了崔中书家夏公 纔出马拜人去见西门庆到 令左右把马牵过迎西门庆至厅上拜揖叙礼西门庆令玳安拿上贺礼青织金绫 纻一端色段一端夏公道学生还不曾拜贺长官到承长官先赐昨者小房又烦费心感谢不尽西门庆道  何太监央学生看房一节我因堂尊分付就说此房来何公到好就估着要学生无不作成讨了房契去看了一口就还了原价 是内臣性儿立马盖桥就成了还是堂尊大福说毕呵呵笑了夏公道何天泉我也还未回拜他因问他此去与长官同行罢了西门庆道他已会定同学生一路去家小还且待后昨日他老公公多致意烦堂尊早些把房儿腾出来搬取家眷他如今且权在衙门里住几日罢了夏公道学生也不肯久稽待这里寻了房儿就使人搬取家小也只待出月罢了说毕西门庆起身又留了个拜帖与崔中书夏公便道要留长官坐坐争奈在于客中彼此情谅送出上马归至何千户家何千户又早伺候午饭等候西门庆悉把拜夏公之事说了一遍腾房已在出月搬取家小何千户大喜谢道足见长官盛情吃毕饭二人正在厅上着棋忽左右来报府里翟爹那里差人送下程来了抓寻到崔老爹那里崔老爹使他来这里来了于是拿帖来宛红帖儿上写着谨具金段一端云 纻一端鲜猪一口北羊一腔内酒二坛点心二盒眷生翟谦顿首拜西门庆见来人说道又蒙 翟大爹费心一面收了礼物写回帖赏来人二两银子抬盒人五钱说道客中不便有亵管家那人连忙接了说道小的不敢领西门庆道将就买杯酒吃便了那人方纔磕头收了王经在傍插口悄悄的说小的姐姐说教我府里去看看爱姐有物事稍与他西门庆问甚物事王经道是家中做的两双鞋脚手西门庆道单单儿怎好拿去分付玳安我皮箱内有稍带的玫瑰花饼取两罐儿用小描金盒儿盛着就把回帖付与王经穿上青衣教他同跟了  往府里看爱姐不题这西门庆写了帖儿送了一腔羊一坛酒谢了崔中书把那一口猪一坛酒两盒点心抬到后边孝顺老公公在此多有打扰慌的何千户就来拜谢说道长官你我一家如何这等计较且说王经到府内请出韩爱姐外厅拜见了打扮 如琼林玉树一般比在家出落自是不同长大了好些       管待了酒饭因见王经身上穿的单薄与了一件天青 纻丝貂鼠氅衣儿又与了五两银子拿来回复西门庆话西门庆大喜正与何千户下棋忽闻绰道之声门上人来报夏老爹来拜拿了两个拜帖儿忙的两个整衣冠迎接到厅叙礼何千户又谢昨日房子之事夏提刑具了两分段帕酒礼奉贺二公西门庆与何千户再三致谢令左右收了  又赏了贲四玳安王经十两银子一面分宾主坐下茶罢共叙寒温夏公道请老公公拜见何千户道家公公进内去了夏公又留下了一个双红拜帖儿说道多顶上老公公拜迟恕罪言毕辞起身去了何千户随即也具一分贺礼一疋金段差人送去不在言表到晚夕何千户又在花园暖阁中摆酒与西门庆共酌夜饮家乐歌唱到二更方寝西门庆因其夜里梦遗之事晚夕令王经拿铺盖来书房地平上睡半夜叫上床脱的精赤条搂在被窝内两个口吐丁香舌融甜唾正是不能得与莺莺会且把红娘去解馋一晚题过到次日起五更与何千户一行人跟随进朝先到待漏院 候时等的开了东华门进入但见星斗依稀禁漏残禁中环佩响珊珊花迎剑戟星初落柳拂旌旗露未干瑞霭光中瞻万岁祥烟影里拥千官欲知今日天颜喜遥覩莲莱紫气蟠少顷只听九重门启鸣哕哕之鸾声阊阖天开覩巍巍之衮裳重熙累洽之日致履端嘉庆之时当时天子祀毕南郊回来文武百官聚集于宫省等候设朝须臾锺响罢天子驾出宫升崇政大殿受百官朝贺须臾香球拨转帘卷扇开怎见的当日朝仪整肃但见皇风清穆温温霭霭气氤氲丽日当空郁郁蒸蒸叆叇微微隐隐龙楼凤阁散满天香霭霏霏拂拂珠宫宝殿映万缕朝霞大庆殿崇庆殿文德殿集贤殿灿灿烂烂金碧交辉干明宫神宁宫昭阳宫合壁宫清宁宫光光彩彩丹青炳灿苍苍凉凉日影着玉砌雕栏袅袅婴婴雾锁着金椽画栋紫扉黄阁宝鼎内缥缥缈缈沉檀香爇丹阶墀玉砌台明明朗朗画烛高焚龙龙冬冬报天敲擂叠三通鉴鉴鍧鍧长乐钟撞一百八下枝枝楂楂叉刀手互相磕撞挨挨曳曳龙虎旗来往盘旋锦衣花帽擎着的是圆盖伞方盖伞上上下下开展即龙蟠驾着的是金辂辇玉辂辇左左右右相阵又见那立金瓜卧金瓜三三两两双龙扇平龙扇叠叠重重群群队队金鞍马玉辔马性貌驯习双双对对宝匣象驾辕象猛力狰狞镇殿将军一个个长长大大赛天神甲披金叶侍朝卫勋一人齐齐整整如地煞刀系绣春严严肃肃殿门内摆列着紏仪御史人人豸冠森耸秉简当胸端端正正姜擦边立站定众官员个个锦衣炳焕宣听旨金殿参参差差齐开宝扇画栋前轻轻款款高卷珠廉文楼上嘐嘐哕哕报时鸡人三唱玉阶前刺刺刮刮肃静鞭响三声齐齐整整列簪缨有五等之爵巍巍荡荡坐龙床倚绣褥瞳万乘之尊远远望见头戴十二旒平顶冠穿赭衮龙袍腰系蓝田玉带脚靸乌油旧履手执金厢白玉圭背靠九雷龙凤扆正是晴日明开青锁闼天风吹下御炉香千条瑞霭浮金阙一朵红云捧玉皇这帝皇果生得尧眉舜目禹背汤肩若说这个官家才俊过人口工诗韵目类群羊善写墨君竹能挥薛稷书道三教之书晓九流之典朝欢暮乐依稀似剑阁孟商王爱色贪杯彷佛如金陆陈后主从十八岁登基即位二十五年倒改了五遭年号先改建中靖国后改崇建改大观改正和当下驾坐宝位静鞭响罢文武百官九卿四相秉简当胸向丹墀五拜三叩头礼进上表章已 有殿头官自穿紫窄衫腰系金厢带步着金阶口传圣勅道胼今即位二十禅于兹矣专岳  告成上天降瑞今值履端之庆与卿共之言未毕斑首中闪过一员大臣来朝靴踏地响袍袖列风生官不知多大玉带显功名视之乃左丞相崇政殿大学士兼吏部尚书太师鲁国公蔡京也幞头象简俯伏金阶叩首口称万岁万岁万万岁臣等诚惶诚恐稽首顿首恭惟皇上御极二十禅以来海宇清宁天下丰稔上天降鉴祯禅叠见日重轮星重辉海重阔圣上握干符永享万年之正统天保定地保宁人保安皇图膺宝历益增永寿之无疆三边永息于兵戈万国来朝于天阙银岳排空玉京挺秀宝 箓膺颁于昊阙绛霄深耸于干宫臣等何幸欣逢盛世交际明良永效华封之祝常沾日月之光不胜瞻天仰圣激切屏营之至谨献颂以闻良久圣旨下来贤卿献颂盖见忠诚朕心加悦诏改明年为宣和元年正月元旦受定命宝肄赦覃赏有差蔡太师承旨下来殿头官口传圣旨有事出班早奏无事卷廉退朝言未毕见一人出离班部例芴躬身绯袍象简玉带金鱼跪在金阶口称光禄大夫掌金吾卫事太尉太保兼太子太保臣朱  引天下提刑官员事后面跪的两准两浙山东山西河南河北关东关西福建广南四川等处刑狱千户章隆等二十六员例该考察已更升补缴换札付合当引奏未敢擅便请旨定夺                 圣旨传下来照例给领朱大尉承旨下来天下龙袍 一展群臣皆散驾即回宫百官皆从端礼门两分而出那十二象不待牵而先走镇将长随纷纷而散只听甲响叉刀力士团子红军尽尽而出惟见戈明朝门外车马纵横待仗罗列人喧呼海沸波翻马嘶喊山崩地裂众提刑官皆出朝上马都来本衙门伺候铁桶相似良久只见知印局来拿了印牌来传道老爷不进衙门了轿儿已在西华门里安放如今要往蔡爷李爷宅内拜冬去了以此众官都散了西门庆与何千户回到家中又过了一夕到次日衙门中领了札付 同众往科中挂了  号打点残装收拾行李与何千户一同起身何太监晚夕置置酒饯行嘱付何千户凡事请教西门大人休要自专差了礼数从十一月 十一日东京起身两家也有二十人跟随竟往山东大道而来已是数九严寒之际点水滴冻之时一路上见了些荒郊野路枯木寒鸦疎林淡日影斜晖暮雪冻云迷晚渡一山未尽一山来后村已过前村望比及刚过黄河到水关八角镇骤然撞遇天起一阵大风但见非干虎啸岂是龙吟卒律律寒飙扑面急飕飕冷气侵入既不能卸柳暗藏着水妖山怪初时节无踪无影次后来卷雾收云惊得那绿杨堤鸥鸟双飞红蓼岸鸳鸯并起则见那人纱窗扑银灯穿画阁透罗裳乱舞飘吹花摆柳昏惨惨走石扬砂白茫茫刮得那大树连声吼刷吼刷惊得那孤雁落深濠须臾砂石打地尘土遮天砂石打地犹如满天骤雨实时来尘土遮天好相似百万貔貅卷土至赶趋得材落渔罢钩卷钩纶疾走回家山中樵子魂惊掖斧斤急忙归舍諕得那山中虎豹缩着头隐着足潜藏深壑刮得那海底蛟拳着爪蟠着尾难显狰狞刮多时只见那房上瓦飞似燕吹良久山中走石如飞瓦飞似燕打得客旅迷踪失道石走怒干諕得那商船紧缆收帆大树连根拔起小树有条无稍这风大不大真个是吹拆地狱门前 刮起酆都顶上尘嫦娥急把蟾宫闭列子空中叫救人险些儿玉皇住不的昆仑顶只刮的大地乾坤上下摇西门庆与何千户坐着两顶毡帏暖轿被风刮得寸步难行又见天色渐晚恐深林中撞出小人来对西门庆   说投奔前村安歇一夜明日风住再行 抓寻了半日远远望见路傍一座古剎数株疏柳半堵横墙但见石砌碑横梦草遮回廊古殿半欹斜夜深宿客无灯火月落安禅更可嗟西门庆与何千户 入寺中投宿见题着黄龙寺见方丈内几个僧人在那里坐禅又无灯火房舍都毁坏半用篱遮长老出来问讯旋炊火煮茶伐草根喂马煮出 来西门庆行囊中带得干鸡腊肉果饼棋子之类晚夕与何千户胡乱食得一顿长老爨一锅豆粥吃了过得一宿次日风止天气始晴与了老和尚一两银子相谢作辞起身往山东来正是王事驱驰岂惮劳关山迢递赴京朝夜投古寺无烟火解使行人心内焦'
let text2 = '第七十一回李瓶儿何  家托梦提刑官引奏朝仪词曰花事阑珊芳草歇客里风光又过些时节小院黄昏人忆别泪痕点点成红血咫尺江山分楚越目断神惊只道芳魂绝梦破五更心欲折角声吹落梅花月话说西门庆同何千户回来走到大街何千户            就邀请西门庆到家一饭西门庆再三固辞何千户令手下把马环拉住说道学生还有一事与长官商议于是并 辔同到宅前下马贲四同抬盒迳往崔中书家去了原来何千户盛陈酒筵在家等候进入厅上但见        兽炭焚烧金炉香霭正中独 设一席下边一席相陪旁边东首又设一席皆盘堆异果花插金瓶        西门庆问道长官今日筵何客何千户道家公公今日下班敢屈长官 一 饭西门庆道长官这等费心     就不是同僚之情何千户 道  家公公    粗酌屈尊长官休怪一面看茶吃了西门庆请老公公拜见何千户道家公公便出来不一时何太监从后边出来穿着绿绒蟒衣冠帽皂鞋宝石绦环西门庆展拜四拜请公公受礼何大监不肯说道使不的西门庆道学生与天泉同寅晚辈老公公齿德俱尊又系中贵自然该受礼讲了半日何大监受了半礼让西门庆上坐他主席相陪何千户旁坐西门庆道老公公这个断然使不得同僚之间岂可旁坐老公公叔侄便罢了学生使不 的何太监大喜道大人甚是知礼罢罢我阁老位儿旁坐罢教做官的陪大人  就是了西门庆道这等学生坐的也安于是各照位坐下何太监道小的儿们再烧了炭来今日天气甚是寒冷 须臾左右火池火叉拿上一包  水磨细炭向      火盆内只一倒厅前放下油纸暖帘来日光掩映十分明亮何 太监道大人请宽了盛服罢西门庆道学生里边没穿甚么衣服使小价下处取来何太监道不消取去令左右接了衣服拿我穿的飞鱼绿绒氅衣 来与大人披上西门庆笑道老先生职事之服学生何以穿得何太监道大人只顾穿怕怎的昨日万岁赐了我蟒衣我也不穿他了就送了大人遮衣服儿罢不一时左右取上来西门庆   令玳安接去员领披上氅衣作揖谢了又请何千户也宽去上盖陪坐又拿上一道茶来吃了何太监道叫小厮们来原来家中教了十二名吹打的小厮两个师范领着上来磕头何太监            就吩咐动起乐来          然后   递酒 上坐何太监亲自把盏西门庆慌道老公公请尊便有长官代劳只安放钟箸儿就是一般何太监道我与大人递一钟儿我家做官的初入芦苇不知深浅望乞大人凡事扶持一二就是情了西门庆道老公公说那里话常言同僚三世亲学生亦托赖老公公余光岂不同力相助何太监道好说好说共同王事彼此扶持西门庆也没等他递酒只接了杯儿领到席上随即回奉一杯安在何千户并何太监席上彼此告揖过坐下吹打毕三个小厮连师范在筵前银筝象板三弦琵琶唱了一套正宫端正好   雪夜访赵普水晶宫  鲛绡帐                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               唱  毕下去酒过数巡食割两道看看天晚秉上灯来西门庆唤玳安拿赏赐与厨役并吹打各色人役就 起身 说道学生  厚扰一日了就此告回那公公那里肯放说道我今日正 下班要与大人请教有甚大酒席只是清坐而已教大人受饥西门庆道承老公公赐这等 美馔如何反言受饥学生回去歇息歇息明早还要与天泉参谒参谒兵科好领札付挂号何太监道既是  大人                要与我家做官的同干事                                       何      不     令人把行李搬过来我家住两日  我这后园儿里有几间小房儿甚是僻静就早晚和做官的理会些公事儿也方便些 强如在别人家      西门庆道在这里 最好只是使夏公见怪相学生疏他一般何太监道没的说如今时年早晨不做官晚夕不唱喏衙门是恁偶戏衙门虽故当初与他同僚今日前官已去后官接管承行与他就无干他若这等说他就是个不知道理的人了今日我定 要和大人坐一夜不放大人去唤左右下边房里快放桌儿管待你西门老爹大官儿饭酒我家差几个人跟他即时把行李都搬了来又吩咐打扫后花园西院干净预备铺陈炕中笼下炭火堂上一呼阶下百诺答应下去了西门庆道老公公盛情只是学生得罪夏公了何太监道     他既出了衙门不在其位不谋其政他管他那 銮驾库的事管不的咱提刑所的事了难怪于你不由分说就打发玳安并马上人吃了酒饭差了几名军牢各拿绳扛迳往崔中书家搬取行李去了何太监道又一件相烦大人我家做官的  到任所还望大人  替他看所宅舍儿  好搬取家小今先教他同大人去待寻下宅子然后打发家小起身也不多连几房家人也只有二三十口西门庆道    老公公吩咐要看多少银子 宅舍何太监道也得千金外房儿              才够住  西门庆道  夏龙溪他京任不去了他一所房子倒要打发老公公何不要了与天泉住一举两得其便此宅门面七间到底五层仪门进去大厅两边厢房鹿角顶后边住房花亭周围群房也有许多街道又宽阔正好天泉住何太监道他要许多价值儿西门庆道他对我说 原是一千三百两又后边添盖了一层平房收拾了一处花亭老公公若要随公公与他多少罢了何太监道我 托大人随大人主张就是了趁今日我在家差个人和他说去讨他那原文书我瞧瞧难得寻下这房舍儿我家做官的去到那里就有个归着了不一时只见玳安同众人搬了行李来回话西门庆问贲四王经来了不曾玳安道王经同押了衣箱行李先来了还有轿子 叫贲四在那里看守着哩西门庆因附耳低言如此  这般        上覆夏老爹借过那里房子的原契来 何公公要瞧瞧就同贲四一答儿来这玳安应的去了不一时贲四青衣小帽同玳安  拿文书回西门庆说夏老爹多多上覆既是何公公要怎好说价钱原文书都拿的来了又收拾添盖使费了许多随爹主张了罢西门庆把原契递与何太监亲看了一遍见上面写着一千二百两说道这房儿想必也住了几年  未免有些糟烂也别要说收拾大人面上         还与他原价那贲四连忙跪下说何爷说的是自古道使的憨钱治的庄田千年房舍换百主一番拆洗一番新  何太监听了喜欢     道你是那里  人倒会说话儿常言成大事者不惜小费其实说的是他教甚么名字西门庆道     他名唤贲四何太监道也罢没个中人儿你就做个中人儿替我讨了文书来今日是个  好日期就把银子兑与他罢西门庆道如今晚了待的明日也罢了何太监道到五更我早进去明日大朝今日不如先交与他银子就了事  西门庆问道明日甚时驾出何太监道子时驾出到坛三更鼓祭了寅正一刻就回 宫 摆了膳就出来设朝升大殿  朝贺天下诸司都上表拜冬次日文武百官吃庆成宴你每是外任官大朝引奏过就没  事了说毕何太监吩咐何千户进后边  打点出二十四锭大元宝来用食盒抬着差了两个家人同贲四玳安押送到崔中书家交割夏公见抬了银子来满心欢喜随即亲手写了文契付与贲四等拿来递上何太监不胜欢喜赏了贲四十两银子玳安王经每人三两西门庆道小孩子家不当赏他何太监道胡乱与他买嘴儿吃三人磕 头谢了何太监吩咐管待酒饭又向西门庆唱了两个喏全仗大人余光西门庆道    还是看老公公金面何太监道还望大人对他说说早把房儿腾出来 就好打发家小起身西门庆道学生一定与他说教他早腾 长官这一去且在衙门公廨中权住几日待他家小搬到京收拾了  长官宝眷起身不迟何太监道收拾直待过年罢了先打发家小去才好十分在衙门中也不方便说话之间已有一更天气西门庆说道老公公请安置罢学生亦不胜酒力了何大监方作辞归后边    歇息去了何千户教家乐弹唱还与西门庆  吃了一回方才起身送至后园  三间书院      台榭湖山盆景花木房内绛烛高烧                              篆内香焚麝饼十分幽雅何千户 陪西门庆叙话   又看茶吃了方道安置  归后边去了西门庆      摘去冠带解衣就寝王经玳安打发 了      就往下边暖炕 上歇去了 西门庆有酒的人睡在枕畔见                      满窗月色翻来复去   良久只闻夜漏沉沉花阴寂寂寒风吹得那窗纸有声况离家已久 正要呼王经进来陪他睡忽 听得窗外有妇人语声甚低即披衣下床革及着鞋袜悄悄启户视之只见李瓶儿雾髟丐云鬟淡妆丽雅素白旧衫笼雪体淡黄软 袜衬弓鞋轻移莲步立于月下西门庆一见挽之入室相抱而哭说道冤家你如何在这里李瓶儿道奴寻访至此对你说我已寻了房儿了今特来见你一面早晚便搬 去了西门庆忙问道你房儿在于何处李瓶儿道咫尺不远出此大街迤东造釜巷中间便是言讫西门庆共他相偎相抱上床云雨不胜美快之极已而整衣扶髻徘徊不舍李瓶儿叮咛嘱咐西门庆道我的哥哥切记休贪夜饮早早回家那厮不时伺害于你千万勿忘 言       讫    挽西门庆相送  走出大街上见月色如昼果然往东转过牌坊到一小巷  见一座双扇白板门指道此奴之家也言毕顿袖而入西门庆急向前拉之恍然惊觉乃是南柯一梦但见月影横窗花枝倒影矣西门庆向褥底摸了摸见精流满席余香在被残唾犹甜追悼莫及悲不自胜正                   是玉宇微茫霜满襟疏窗淡月梦魂惊凄凉睡到无聊处恨杀寒鸡不肯鸣西门庆  梦醒睡不着巴不得天亮比及天亮又睡着了次日 早何千户家童仆起来伺候          打发西门庆梳洗毕何千户又早出来陪侍吃了姜茶放桌儿请吃粥西门庆问老公公怎的不见何千户道家公公从五更就进内去了须臾拿上粥                来吃了粥又拿上一盏肉圆子馄饨鸡蛋头脑汤        一面吃着   就吩咐备马何千户与西门庆冠冕仆从跟随早进内参见兵科出来何千户便分路来家西门庆又到相国寺拜智云长老长老又留摆斋西门庆只吃了一个点心余者收  与手下人吃了      就起身从东街穿过来要往崔中书家拜夏龙溪去因从造釜巷所过中间果见有双扇白板门与梦中所见一般悄悄使玳安问隔壁卖豆腐老姬此家姓甚名谁老姬答道此袁指挥家也西门庆于是不胜叹异到了崔中书家夏公才待出门拜人 见西门庆到忙令左右把马牵过迎   至厅上拜揖叙礼西门庆令玳安拿上贺礼青织金绫纟宁一端色缎一端夏公道学生还不曾拜贺长官到承长官先施昨日小房又烦费心感谢不尽西门庆道昨日何太监 说起看房  我因堂尊分上就说此房来何公            讨了房契去看了一口就还 原价果是内臣性儿立马盖桥就成了还是堂尊大福说毕二人笑了夏公道何天泉我也还未回拜他因问他此去与长官同行罢了西门庆道他已会定同学生一路去家小 且待后昨日他老公公多致意烦堂尊早些把房儿腾出来搬取家眷他如今 权在衙门里住几日罢了夏公道学生也不肯久稽待这里寻了房儿就使人搬取家小也只待出月罢了说毕西门庆起身又留了个拜帖与崔中书夏公                  送出上马归至何千户家何千户又早 有午饭等候西门庆悉把拜夏公之事说了一遍腾房已在出月    何千户大喜谢道足见长官盛情吃毕饭二人正在厅上着棋忽左右来报府里翟爹  差人送下程来了抓寻到崔老爹那里崔老爹使他 这里来了于是拿帖    看上写着谨具金缎一端云纟宁一端鲜猪一口北羊一腔内酒一坛点心二盒眷生翟谦顿首拜西门庆见来人说道又蒙你翟 爹费心一面收了礼物写回帖赏来人二两银子抬盒人五钱说道客中不便有亵管家那人                           磕头收了王经在  旁悄悄 说小的姐姐说教我府里去看看爱姐有物事捎与他西门庆问甚物事王经道是家中做的两双鞋脚手西门庆道单单儿怎好拿去吩咐玳安我皮箱内有 带的玫瑰花饼取两罐儿        就把口帖付与王经穿上青衣   跟了来人往府里看爱姐不题这西门庆写了帖儿送了一腔羊一坛酒谢了崔中书把 一口猪一坛酒两盒点心抬到后边孝顺老公公        何千户  拜谢 道长官你我一家如何这等计较且说王经到府内请出韩爱姐外厅拜见了打扮的如琼林玉树一般比在家出落自是不同长大了好些问了回家中事务管待了酒饭 见王经身上  单薄与了一件天青纟宁丝貂鼠氅衣儿又与了五两银子拿来回覆西门庆话西门庆大喜正与何千户下棋忽闻绰道之声门上人来报夏老爹来拜拿进两个拜帖儿  两个  忙迎接到厅叙礼何千户又谢昨日房子之事夏 公具了两分缎帕酒礼奉贺二公西门庆与何千户再三致谢令左右收了夏公又赏了贲四玳安王经十两银子一面分宾主坐下茶罢共叙寒温夏公道请老公公拜见何千户道家公公进内去了夏公又留下了一个双红拜帖儿说道多顶上老公公拜迟恕罪言毕 起身去了何千户随即也具一分贺礼一匹金缎差人送去不在言表到晚夕何千户又在花园暖阁中摆酒与西门庆共酌  家乐歌唱到二更方寝西门庆因 昨日梦遗之事晚夕令王经拿铺盖来书房地平上睡半夜叫上床     搂在被窝内两个口吐丁香舌融甜唾正是不能得与莺莺会且把红娘去解馋一晚题过到次日起五更与何千户一行人跟随进朝先到待漏院伺候 等的开了东华门进入但见星斗依稀禁漏残禁中环佩响珊珊                            欲知今日天颜喜遥睹蓬莱紫气皤少顷只听九重门启鸣哕哕之鸾声阊阖天开睹巍巍之衮             冕当时天子祀毕南郊回来文武百官聚集   等候设朝须臾钟响 天子驾出    大殿受百官朝贺须臾香球拨转帘卷扇开                                                                                                                                                                                                                                                                                                                                                            正                                                                                                                                         是晴日明开青锁闼天风吹下御炉香千条瑞霭浮金阙一朵红云捧玉皇这 皇帝生得尧眉舜目禹背汤肩      才俊过人口工诗韵    善写墨君竹能挥薛稷书通三教之书晓九流之典朝欢暮乐依稀似剑阁孟商王爱色贪花仿佛如金陵陈后主                                   当下驾坐宝位静鞭响罢文武百官    秉简当胸向丹墀五拜三叩头 进上表章已而有殿头官              口传圣旨道朕今即位二十  祀矣艮岳于兹告成上天降瑞今值覆端之庆与卿共之言未毕班首中闪过一员大臣来朝靴踏地响袍袖列风生          视之乃左丞相崇政殿大学士兼吏部尚书太师鲁国公蔡京也幞头象简俯伏金阶  口称万岁万岁万万岁臣等诚惶诚恐稽首顿首恭惟皇上御极二十祀以来海宇清宁天下丰稔上天降鉴祯祥叠见                                          三边永息 兵戈万国来朝 天阙银岳排空玉京挺秀宝竹录膺颁于昊阙绛宵深耸于乾宫臣等何幸欣逢盛世交际明良永效华封之祝常沾日月之光不胜瞻天仰圣激切屏营之至谨献颂以闻良久圣旨下来贤卿献颂益见忠诚朕心嘉悦诏改明年为重和元年正月元旦受定命宝肄赦覃赏有差蔡大师承旨下来殿头官口传圣旨有事出班早奏无事卷帘退朝言未毕见一人出离班部倒笏躬身绯袍象简玉带金鱼跪在金阶口称光禄大夫掌金吾卫事太尉太保兼太子太保臣朱面力引天下提刑官员                                 章隆等二十六员例该考察已更改补缴换札付合当引奏未敢擅便请旨定夺于是二十六员提刑官都跪在后面不一时圣旨传下来照例给领朱太尉承旨下来天 子袍袖一展群臣皆散驾即回宫百官皆从端礼门两分而出那十二象不待牵而先走镇将长随纷纷而散                    朝门外车马纵横侍仗罗列人喧呼海沸波翻马嘶喊山崩地裂众提刑官皆出朝上马都来本衙门伺候    良久只见知印  拿了印牌来传道老爷不进衙门了  已          往蔡爷李爷宅内拜冬去了以此众官都散了西门庆与何千户回到家中又过了一夕到次日衙门中领了札付又挂了号又拜辞了翟管家打点残装收拾行李与何千户一同起身何太监晚夕置 酒饯行嘱咐何千户凡事请教西门大人休要自专差了礼数从十一月二十 日东京起身两家也有二十人跟随竟往山东大道而来已是数九严寒之际点水滴冻之时一路上见了些荒郊野路枯木寒鸦疏林淡日影斜晖暮雪冻云迷晚渡一山未尽一山来后村已过前村望比及刚过黄河到水关八角镇骤然撞遇天起一阵大风但见非干虎啸岂是龙吟卒律律寒飙扑面急飕飕冷气侵            人初时节无踪无影次后来卷雾收云                                   吹花摆柳白茫茫走石扬砂昏惨惨刮得那大树连声吼   惊得那孤雁落深濠须臾砂石打地尘土遮天砂石打地犹如满天骤雨即时来尘土遮天好 似百万貔貅卷土至                                                                                                                       这风大不大真个是吹折地狱门前树乱起酆都顶上尘常娥急把蟾官闭列子空中叫救人险些儿玉皇住不得昆仑顶只刮得大地乾坤上下摇西门庆与何千户坐着两顶毡帏暖轿被风刮得寸步难行又见天色渐晚恐深林中撞出小人来 西门庆吩咐手下快寻那里安歇一夜明日风住再行罢抓寻了半日远远望见路旁一座古刹数株疏柳半堵横墙但见石砌碑横梦草遮回廊古殿半欹斜夜深宿客无灯火月落安禅更可嗟西门庆与何千户忙入寺中投宿上题着黄龙寺见方丈内几个僧人在那里坐禅又无灯火房舍都毁坏半用篱遮长老出来问讯旋吹火煮茶伐草根喂马煮出茶来西门庆行囊中带得干鸡腊肉果饼  之类晚夕与何千户胡乱食得一顿长老爨一锅豆粥吃了过得一宿次日风止天  晴与了 和尚一两银子相谢作辞起身往山东来正是王事驱驰岂惮劳关山迢递赴京朝夜投古寺无烟火解使行人心内焦'
let unorg = [[28, 61], [68, 83], [195, 205], [1048, 1056], [1059, 1178], [1184, 1202], [1204, 1212], [1226, 1237], [1264, 1275], [1285, 1337], [1351, 1365], [1378, 1387], [1392, 1402], [1406, 1416], [1433, 1500], [1520, 1568], [1571, 1595], [1596, 1633], [1634, 1678], [1697, 1710], [1718, 1735], [1742, 1758], [1781, 1837], [1842, 1886], [1889, 1902], [1909, 2056], [2058, 2078], [2085, 2220], [2688, 2696], [3205, 3217], [4289, 4304], [4546, 4555], [4599, 4613], [6125, 6134], [6145, 6155], [6187, 6214], [6230, 6245], [6263, 6275], [6284, 6334], [6342, 6354], [6365, 6387], [6396, 6425], [6432, 6459], [6461, 6471], [6472, 6508], [6512, 6588], [6595, 6609], [6619, 6629], [6643, 6688], [6692, 6715], [6763, 6788], [6794, 6802], [6803, 6864], [6884, 6897], [6909, 6917], [6936, 6959], [7029, 7040], [7058, 7079], [7206, 7223], [7241, 7250], [7278, 7290], [7293, 7304], [7356, 7364]]
let lkx = [[1059, 1369], [1374, 1690], [1718, 2223]]
let unknown = [[1053, 1369], [1374, 1690], [1718, 2223], [3205, 3215], [6792, 6801], [6924, 6933], [7031, 7040], [7057, 7068], [7209, 7219], [7277, 7287], [7403, 7411], [7449, 7459], [7799, 7807], [8191, 8198]]