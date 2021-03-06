var status = -1;

function action(mode, type, selection) {
    if (mode == 0) {
        status--;
    } else {
        status++;
    }

    if (status == 0) {
        cm.sendNextS("........", 3);
    } else if (status == 1) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg0/14", [2000, 130, 50, 1, 1, 10, 0, 0]);
        cm.getDirectionEffect(1, "", [2000]);
    } else if (status == 2) {
        cm.sendNextS("(…總覺得… 好像傳來某種聲音…)", 3);
    } else if (status == 2) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg0/15", [2000, -130, 50, 1, 1, 10, 0, 0]);
        cm.getDirectionEffect(1, "", [2000]);
    } else if (status == 2) {
        cm.sendNextS("(這裡是什麼地方呢… 我還活著嗎？)", 3);
    } else if (status == 2) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg0/16", [2000, 130, 50, 1, 1, 10, 0, 0]);
        cm.getDirectionEffect(1, "", [2000]);
    } else if (status == 3) {
        cm.sendNextS("(嗚… 力量逐漸消失當中… 似乎有東西在吸取我的力量…)", 3);
    } else if (status == 4) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg0/17", [2000, -130, 50, 1, 1, 10, 0, 0]);
        cm.getDirectionEffect(1, "", [2000]);
    } else if (status == 4) {
        cm.sendNextS("(他們將我的力量…？ 從這裡出去吧！)", 3);
    } else if (status == 5) {
        cm.topMsg("連續按下控制鍵打破牆壁，然後走出去。");
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/guide1/0", [3000, 0, -100, 1, 1, 20, 0, 0]);
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/breakEgg/1", [6600, 0, 0, 1, 1, 1, 0, 0]);
        cm.getDirectionEffect(4, "17#17#17#", [2, 2, 3000, 0, 0, 0, 0, 0]);
    } else if (status == 6) {
        cm.environmentChange("demonSlayer/punch", 5);
        cm.environmentChange("demonSlayer/crackEgg", 5);
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/1", [2000, -130, 50, 1, 1, 10, 0, 0]);
        cm.environmentChange("demonSlayer/crackEgg", 5);
        cm.getDirectionEffect(1, "", [1000]);
    } else if (status == 7) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/breakEgg/2", [9000, 0, 0, 1, 1, 5, 0, 0]);
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/2", [2000, 130, 50, 1, 1, 10, 0, 0]);
        cm.getDirectionEffect(1, "", [1000]);
    } else {
        cm.environmentChange("demonSlayer/breakEgg", 5);
        cm.environmentChange("demonSlayer/whiteOut", 13);
        cm.dispose();
        cm.warp(931050020, 0);
    }
}