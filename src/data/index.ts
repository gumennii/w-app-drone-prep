import { group_db } from './group_db'
import { category_db } from './category_db'
import { question_db } from './questions_db'

// Manually Created Arrays
const groups_ids = [11286823, 11286824, 11286821, 11286822, 11286827]

const categories_ids = [
  56, 6, 10, 12, 21, 3110363, 34, 3110362, 3110365, 35215712, 134, 3110361,
  35215713, 147, 18, 2,
]

const questions_ids = [
  3110699, 3110602, 1400, 26957587, 3110406, 35215748, 35215786, 16019872,
  3110647, 1937, 3110840, 3110574, 26987574, 26957575, 1286, 1476, 1399,
  16019675, 3110824, 3111458, 555, 3110864, 3110534, 3110550, 3110614, 35215770,
  3110482, 3110944, 26957579, 35215782, 3110884, 3110848, 1530, 1450, 1946,
  16019848, 3110454, 3110386, 26987558, 486, 1284, 276, 3110876, 3110494,
  16019868, 3110715, 3110752, 3110880, 3110768, 1947, 3110639, 1470, 1475, 1415,
  1290, 1402, 1780, 3110606, 3110530, 3110422, 1938, 1308, 502, 35215740,
  3110916, 665, 1931, 1769, 3110643, 3110598, 3110442, 35215774, 875, 1553,
  3110426, 3110832, 26987562, 35215752, 3110960, 16019687, 3110410, 3110510,
  536, 3110828, 3110723, 254, 1746, 35215810, 3110590, 1786, 3110402, 3110800,
  35215764, 3110976, 1791, 3110562, 3110390, 16019864, 3110418, 3110872,
  3110788, 3110458, 3110570, 3110382, 16019671, 3110952, 3110546, 1410, 3110984,
  3110964, 843, 484, 1299, 1403, 3110748, 480, 1447, 1311, 3110744, 1933,
  3110631, 3110924, 3110820, 873, 860, 3110792, 3110812, 3110398, 3110996, 1013,
  3110414, 3110836, 856, 858, 26987543, 16019695, 1452, 1289, 1467, 1948,
  3110651, 3110618, 1283, 3110430, 3110675, 1745, 651, 500, 35215744, 3110932,
  3110772, 16019691, 1785, 3110780, 3110663, 1414, 3110956, 35215760, 1275,
  1406, 26987567, 3110896, 3110502, 3110948, 2577177, 16019738, 3110739,
  3110438, 35215806, 3110719, 482, 35215802, 3110856, 1930, 3110687, 1274,
  3110478, 2576789, 1460, 3110450, 1015, 3110764, 35215778, 16019679, 35215814,
  3110735, 3110852, 1288, 16019683, 659, 3110542, 3110623, 3110378, 3110695,
  3110635, 3110558, 3110522, 1408, 485, 3110490, 3110659, 1747, 1468, 16019713,
  3110804, 3110707, 3110968, 535, 1941, 3110683, 26957571, 3110912, 1551,
  3110776, 35215715, 1291, 1445, 3110940, 1454, 3110784, 35215736, 1744, 1297,
  3110366, 3110506, 3110594, 3110904, 3110992, 3110892, 3110972, 35215844,
  3110586, 35215790, 3110727, 1788, 3110920, 3110582, 3110554, 3110703, 1448,
  3110760, 2161, 3110868, 3110474, 1474, 3110462, 842, 3110627, 3110578,
  3110988, 16019852, 1790, 3110526, 3110498, 3110816, 3110936, 3110888, 1544,
  3110671, 1764, 3110486, 3110374, 2576748, 1779, 35215756, 16019856, 1949,
  1782, 3110796, 673, 1461, 3110844, 3110466, 1453, 857, 1950, 26987549, 1007,
  1446, 3110538, 1812, 1310, 3110808, 3110514, 1009, 2576715, 2191, 3110610,
  1554, 22365747, 3110566, 1401, 3110980, 3110434, 1926, 3110711, 26987578,
  1407, 35215798, 3110394, 1318, 3110860, 35215732, 35215794, 1541, 3110370,
  3110756, 3110667, 1302, 891, 3110731, 16019699, 3110908, 3110900, 1940,
  3110655, 3110679, 3110470, 1281,
]

export {
  group_db,
  category_db,
  question_db,
  groups_ids,
  categories_ids,
  questions_ids,
}
