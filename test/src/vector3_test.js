const {Vector3} = require('../../src/measure')
const assert = require('assert');
const should = require('should');

let v3 = null

describe('lib/dataStructure/Vector3', function () {
    beforeEach(async () => {
        v3 = new Vector3(20, 21, 22)
    })

    it('create', function () {
        assert.equal(v3.x, 20)
        assert.equal(v3.y, 21)
        assert.equal(v3.z, 22)
    })


    it('index', function () {
        assert.equal(v3[0], 20)
        assert.equal(v3[1], 21)
        assert.equal(v3[2], 22)
    })

    it('clone', function () {
        let c = v3.clone()
        assert.equal(c.x, 20)
        assert.equal(c.y, 21)
        assert.equal(c.z, 22)
        c[0] += 1
        assert.equal(c.x, 21)
        assert.equal(v3.x, 20)
        c.y += 1
        assert.equal(c.y, 21)
    })

    it('inverse', function () {
        let inv1 = v3.inverse()
        assert.equal(inv1.x, -20)
        assert.equal(v3.x, 20)
        assert.equal(inv1.y, -21)
        assert.equal(v3.y, 21)
        assert.equal(inv1.z, -22)
        assert.equal(v3.z, 22)
        let inv2 = v3.inverse(true)
        assert.equal(inv2.x, -20)
        assert.equal(inv2.y, -21)
        assert.equal(inv2.z, -22)
        assert.equal(v3, inv2)
    })

    it('add', function () {
        let c = new Vector3(1, 1, 1)
        let add1 = v3.add(c)
        assert.equal(add1.x, 21)
        assert.equal(v3.x, 20)
        assert.equal(add1.y, 22)
        assert.equal(v3.y, 21)
        assert.equal(add1.z, 23)
        assert.equal(v3.z, 22)
        let add2 = v3.add(c, true)
        assert.equal(add2.x, 21)
        assert.equal(add2.y, 22)
        assert.equal(add2.z, 23)
        assert.equal(v3, add2)
    })

    it('sub', function () {
        let c = new Vector3(-1, -1, -1)
        let add1 = v3.sub(c)
        assert.equal(add1.x, 21)
        assert.equal(v3.x, 20)
        assert.equal(add1.y, 22)
        assert.equal(v3.y, 21)
        assert.equal(add1.z, 23)
        assert.equal(v3.z, 22)
        let add2 = v3.sub(c, true)
        assert.equal(add2.x, 21)
        assert.equal(add2.y, 22)
        assert.equal(add2.z, 23)
        assert.equal(v3, add2)
    })

    it('scl', function () {
        let add1 = v3.scl(2)
        assert.equal(add1.x, 40)
        assert.equal(add1.y, 42)
        assert.equal(add1.z, 44)
        assert.equal(v3.x, 20)
        assert.equal(v3.y, 21)
        assert.equal(v3.z, 22)
        let add2 = v3.scl(2, true)
        assert.equal(add2.x, 40)
        assert.equal(add2.y, 42)
        assert.equal(add2.z, 44)
        assert.equal(v3, add2)
    })

    it('mul', function () {
        let add1 = v3.mul(new Vector3(1, 2, 3))
        assert.equal(add1.x, 20)
        assert.equal(add1.y, 42)
        assert.equal(add1.z, 66)
    })

    it('lerp', function () {
        let add1 = v3.lerp(Vector3.prefab.zero)
        add1.x.should.equal(10)
        add1.z.should.equal(11)
        let add2 = v3.lerp(Vector3.prefab.zero, 0.2)
        add2.x.should.equal(16)
    })

    it('clamp', function () {
        let add1 = v3.clamp(20.5, 21)
        add1.x.should.equal(20.5)
        assert.equal(add1.y, 21)
        assert.equal(add1.z, 21)
    })

    it('dot', function () {
        v3.dot(new Vector3(2, 3, 4)).should.equal(191)
    })

    it('norm', function () {
        (new Vector3(120, 120, 120)).norm.x.should.approximately(Vector3.prefab.one.scl(1 / Math.sqrt(3)).x, 0.0000001)
    })

    it('string', function () {
        let str = v3.toString()
        assert.equal(str, "(20,21,22)")
    })

    it('string compressed', function () {
        v3.toString(true).should.equal("20,21,22")
        v3[0] = 0
        v3.toString(true).should.equal(",21,22")
        v3[2] = 0
        v3.toString(true).should.equal(",21,")
        v3[1] = 0
        v3.toString(true).should.equal(",,")
    })


    it('default value', function () {

        Vector3.prefab.zero.x.should.equal(0)
        Vector3.prefab.zero.y.should.equal(0)
        Vector3.prefab.zero.z.should.equal(0)

        Vector3.prefab.one.x.should.equal(1)
        Vector3.prefab.one.y.should.equal(1)
        Vector3.prefab.one.z.should.equal(1)

        Vector3.prefab.left.x.should.equal(-1)
        Vector3.prefab.left.y.should.equal(0)
        Vector3.prefab.left.z.should.equal(0)

        Vector3.prefab.right.x.should.equal(1)
        Vector3.prefab.right.y.should.equal(0)
        Vector3.prefab.right.z.should.equal(0)

        Vector3.prefab.down.x.should.equal(0)
        Vector3.prefab.down.y.should.equal(-1)
        Vector3.prefab.down.z.should.equal(0)

        Vector3.prefab.up.x.should.equal(0)
        Vector3.prefab.up.y.should.equal(1)
        Vector3.prefab.up.z.should.equal(0)

        Vector3.prefab.back.x.should.equal(0)
        Vector3.prefab.back.y.should.equal(0)
        Vector3.prefab.back.z.should.equal(-1)

        Vector3.prefab.forward.x.should.equal(0)
        Vector3.prefab.forward.y.should.equal(0)
        Vector3.prefab.forward.z.should.equal(1)
    })
})

