status = -1;
var itemList = Array(
//-------����-------
Array(2290000,800,1,1),
			Array(2290096,300,1,1),//ð�յ���ʿ20
			Array(2290125,100,1,1),//ð�յ���ʿ30
			Array(2280004,800,1,1),//�ռ�����
			Array(2290028,800,1,1),//�ռ�����20
			Array(2290029,800,1,1),//�ռ�����30
			Array(2290000,800,1,1),//��ʯ20
			Array(2290001,800,1,1),//��ʯ
			Array(2290002,800,1,1),//������˹20
			Array(2290003,800,1,1),//������˹30
			Array(2280012,800,1,1),//ͻ��
			Array(2290004,800,1,1),//ͻ��20
			Array(2290005,800,1,1),//ͻ��30
			Array(2290006,800,1,1),//����̩ɽ20
			Array(2290007,800,1,1),//����̩ɽ30
			Array(2290010,800,1,1),//�������20
			Array(2290011,800,1,1),//�������30
			Array(2290012,800,1,1),//��������20
			Array(2290013,800,1,1),//��������30
			Array(2290014,800,1,1),//������20
			Array(2290015,800,1,1),//������30
			Array(2290016,800,1,1),//����20
			Array(2290017,800,1,1),//����30
			Array(2290018,800,1,1),//ʥӡ֮��
			Array(2290019,800,1,1),//ʥӡ֮��
			Array(2290020,800,1,1),//ʥ��20
			Array(2290021,800,1,1),//ʥ��30
			Array(2290022,800,1,1),//����20
			Array(2290023,800,1,1),//����30
			Array(2290024,800,1,1),//ħ������20
			Array(2290025,800,1,1),//ħ������30
			Array(2290026,800,1,1),//����20
			Array(2290027,800,1,1),//����30
			Array(2290030,800,1,1),//��������20
			Array(2290031,800,1,1),//��������30
			Array(2290032,800,1,1),//����20
			Array(2290033,800,1,1),//����30
			Array(2290034,800,1,1),//ʥ��20
			Array(2290035,800,1,1),//ʥ��30
			Array(2290036,800,1,1),//���20
			Array(2290037,800,1,1),//���30
			Array(2290038,800,1,1),//����20
			Array(2290039,800,1,1),//����30
			Array(2290040,800,1,1),//�콵20
			Array(2290041,800,1,1),//�콵30
			Array(2290042,800,1,1),//����20
			Array(2290043,800,1,1),//����30
			Array(2290044,800,1,1),//��ħ20
			Array(2290045,800,1,1),//��ħ30
			Array(2290046,800,1,1),//��˪20
			Array(2290047,800,1,1),//��˪30
			Array(2290048,800,1,1),//ʥ��20
			Array(2290049,800,1,1),//ʥ��30
			Array(2290052,800,1,1),//����20
			Array(2290053,800,1,1),//����30
			Array(2290056,800,1,1),//�����20
			Array(2290057,800,1,1),//�����30
			Array(2290058,800,1,1),//���˼�20
			Array(2290059,800,1,1),//���˼�30
			Array(2290060,800,1,1),//���罣��20
			Array(2290061,800,1,1),//���罣��30
			Array(2290062,800,1,1),//���20
			Array(2290063,800,1,1),//���30
			Array(2290064,800,1,1),//����20
			Array(2290065,800,1,1),//����30
			Array(2290066,800,1,1),//����20
			Array(2290067,800,1,1),//����30
			Array(2290068,800,1,1),//����20
			Array(2290069,800,1,1),//����30
			Array(2290070,800,1,1),//��͸20
			Array(2290071,800,1,1),//��͸30
			Array(2290072,800,1,1),//��ӥ20
			Array(2290073,800,1,1),//��ӥ30
			Array(2290074,800,1,1),//һ��20
			Array(2290075,800,1,1),//һ��30
			Array(2290076,800,1,1),//�ٶ���20
			Array(2290077,800,1,1),//�ٶ���30
			Array(2290078,800,1,1),//��Һ20
			Array(2290079,800,1,1),//��Һ30
			Array(2290080,800,1,1),//����20
			Array(2290081,800,1,1),//����30
			Array(2290082,800,1,1),//����20
			Array(2290083,800,1,1),//����30
			Array(2290084,800,1,1),//����20
			Array(2290085,800,1,1),//����30
			Array(2290086,800,1,1),//���20
			Array(2290087,800,1,1),//�弶30
			Array(2290088,800,1,1),//����20
			Array(2290089,800,1,1),//����30
			Array(2290090,800,1,1),//˫��20
			Array(2290091,800,1,1),//˫��30
			Array(2290092,800,1,1),//��ɱ20
			Array(2290093,800,1,1),//��ɱ30
			Array(2290094,800,1,1),//����20
			Array(2290095,800,1,1),//����30
			Array(2290089,800,1,1),//����30
			Array(2290089,800,1,1),//����30
			Array(2290089,800,1,1),//����30
			Array(2290089,800,1,1),//����30
			Array(2290089,800,1,1),//����30
			Array(2290089,800,1,1),//����30
			Array(2290089,800,1,1),//����30
			Array(2290089,800,1,1),//����30
			Array(2290089,800,1,1),//����30
			Array(2290089,800,1,1),//����30
			Array(2290089,800,1,1),//����30
			Array(2280004,800,1,1),//�ռ�����
			Array(2280004,800,1,1),//�ռ�����
			Array(2280005,800,1,1),//���������
			Array(2290054,800,1,1),//���������20
			Array(2290055,800,1,1),//���������30
			Array(2280006,800,1,1),//����
			Array(2280007,800,1,1),//���׶���
			Array(2290008,800,1,1),//���׶���20
			Array(2290009,800,1,1),//���׶���30
			Array(2280008,800,1,1),//����һ
			Array(2280009,800,1,1),//��â�ɽ�
			Array(2290050,800,1,1),//��â�ɽ�20
			Array(2290051,800,1,1),//��â�ɽ�30
			Array(2280010,800,1,1),//�������⼦��
			Array(2280000,800,1,1),//�����
			Array(2280001,800,1,1),//������
			Array(2280002,800,1,1),//�ᶨ����־
			Array(2280011,800,1,1),//������
			Array(2280012,800,1,1)//ͻ��
);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("���м����鶼�����");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.haveItem(4000313,15)) {
            cm.sendYesNo("��ã������ǻƽ��Ҷ���⣬�����������ս��Ʒ��ȡ���ܲᣬ��Ҫ��ȡ��");
        } else {
            cm.sendOk("�㱳������#b#t4000313##k��?");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 800);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "�ƽ��Ҷ����", notice);
            if (item != -1) {
                cm.gainItem(4000313, -15);
                cm.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                cm.sendOk("��ȷʵ��#b#t4000313##k������ǣ�����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("�������������ʲô��û���õ���\r\n(����˰�ο������ѩ�˷��ϵ�����ʯ��)");
            cm.gainItem(4001084, -15);
            cm.gainItem(4001084, 15);
            cm.safeDispose();
        }
    }
}