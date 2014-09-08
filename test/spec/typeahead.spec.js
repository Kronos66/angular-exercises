describe('TypeaheadCtrl', function () {
    'use strict';
    beforeEach(module('itcApp'));
    var typeadheaCtrl;
    var ContactDAOMock;
    var $q;
    var contacts = [
        {
            id: 1,
            email: 'example.name@domain.com',
            name: 'Example Name'
        },
        {
            id: 2,
            email: 'test.test@test.com',
            name: 'Test Name'
        },
        {
            id: 3,
            email: 'james.brown@yahoo.com',
            name: 'James Brown'
        },
        {
            id: 4,
            email: 'martin@gmail.com',
            name: 'Martin Fowler'
        }
    ];

    beforeEach(function () {
        ContactDAOMock = jasmine.createSpyObj('ContactDAO', ['getAll']);
        ContactDAOMock.getAll.andReturn({
            then: function (callback) {
                callback(contacts);
                return this;
            }
        })
    });
    beforeEach(inject(function ($controller) {
        typeadheaCtrl = $controller('TypeaheadCtrl', {ContactDAO: ContactDAOMock})
    }));
    describe('Check function typeaheaCtrl.getContact', function () {
        it('Call typeaheaCtrl.getContacts', function () {
            typeadheaCtrl.getContacts();
            expect(ContactDAOMock.getAll).toHaveBeenCalled();
        });
        it('Should check length array', function () {
            expect(typeadheaCtrl.data).toBe(undefined);
            typeadheaCtrl.getContacts();
            expect(typeadheaCtrl.data.length).toEqual(4)
        })
    });
    describe('Check function typeaheaCtrl.selectContact', function () {
        it('Call typeaheadCtrl.selectContact', function () {
            typeadheaCtrl.selectContact({id: 1, email: 'Test Name', name: 'Example Name'});
            expect(typeadheaCtrl.selected).toEqual({id: 1, email: 'Test Name', name: 'Example Name'});

            typeadheaCtrl.selectContact({id: 2, email: 'example.name@domain.com', name: 'Martin Fowler'});
            expect(typeadheaCtrl.selected).toEqual({id: 2, email: 'example.name@domain.com', name: 'Martin Fowler'});

            typeadheaCtrl.selectContact({id: 33, email: 'test.test@test.com', name: 'Example Name'});
            expect(typeadheaCtrl.selected).toEqual({id: 33, email: 'test.test@test.com', name: 'Example Name'});

            typeadheaCtrl.selectContact({id: 32123, email: 'example.name@domain.com', name: 'Example Name'});
            expect(typeadheaCtrl.selected).toEqual({id: 32123, email: 'example.name@domain.com', name: 'Example Name'});

            typeadheaCtrl.selectContact({id: 322, email: 'martin@gmail.com', name: 'Example Name'});
            expect(typeadheaCtrl.selected).toEqual({id: 322, email: 'martin@gmail.com', name: 'Example Name'});
        })
    });


});




