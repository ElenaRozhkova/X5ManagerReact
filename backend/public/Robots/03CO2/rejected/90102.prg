79 ~#Header-Begin#-------------------------------------------------------------
79 Project   : Kabine_0_CO2_PositionMP1_Z.rs9
79 Date/Time : 21.06.2016 08:15:30
79 Build No. : 3
79  
79 User      : Administrator
79 Machine   : NBDE1F8155
79  
79 Robot name: R01CL
79 Robot Kin.: T1-X5_LL_K70
79 Robot ID  : {7ABC855F-5905-4A4B-8A4F-1649842077D2}
79 Robot Ctrl: b+m X5
79  
79 Post      : BM X5 Postprozessor V 1.2.1
79 Generator : Famos robotic V9.4.9 / 17
79  
79  
79 ~#Header-End#---------------------------------------------------------------
80  0
79 ~#GroupName#Start
79 ~#PathName#Start
79 ; SPS Programm Start
11 12 1
79 ~#GroupName#Rob_01
79 ~#PathName#Startbahn
83  0
44  10
32  100
16  0 0
40  50
33  15000
45  1
69  2
17  1
147    2179.44   1051.54   1122.72   171.860  -168.098   -11.931  0  0  0 800
120    2736.32   1217.82   1128.65  -117.723  -145.412     5.082  0  0  0 800
120    2794.72   2335.26   1128.41  -110.000  -160.000     0.000  0  0  0 800
79 ~#GroupName#Rob_01
79 ~#PathName#MP2_Z
120    2853.12   2452.70    928.18  -110.000  -160.000     0.000  0  0  0 500
120    2853.12   2452.70    728.18  -110.000  -160.000     0.000  0  0  0 250
16  0 4500
120    2853.12   2452.70    978.18  -110.000  -160.000     0.000  0  0  0 500
79 ~#GroupName#Rob_01
79 ~#PathName#GoHome
120    2914.72   2335.26   1128.41  -110.000  -160.000     0.000  0  0  0 800
120    2926.32   1217.82   1128.65   -93.127  -179.050    -1.882  0  0  0 800
120    3286.26   1106.06   1131.03     8.889  -149.913   178.503  0  0  0 800
120    4366.08   1170.77   1038.19     7.272  -171.205  -172.416  0  0  0 800
79 ~#GroupName#Home
79 ~#PathName#Home
79 ; SPS Programm Ende
11 12 0
79 ~#GroupName#Home
79 ~#PathName#Home_pkt
32  0
17  0
123      -10.0      21.0     -61.0     -34.0      61.0     -19.0  0  0  0 50