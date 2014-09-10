(function () {
    'use strict';
    describe('ngselect2App', function () {
        beforeEach(module('ngselect2App'));
        var ngselect2Ctrl;
        var ArtistMock;
        var results = {artist: [
            {id: 1, name: 'Metal'},
            {id: 2, name: 'Hip-Hop'},
            {id: 3, name: 'Rap'},
            {id: 4, name: 'Dance'},
            {id: 5, name: 'Anything'}
        ],
            callback: function () {
                return this.artist;
            }};
        beforeEach(function () {
            ArtistMock = jasmine.createSpyObj('Artist', ['query']);
            ArtistMock.query.andReturn({
                then: function (callback) {
                    callback(results);
                    return this;
                }

            });
        });

        beforeEach(inject(function ($controller) {
            ngselect2Ctrl = $controller('Ngselect2Ctrl', {$resource: null, $scope: null, Artist: ArtistMock});
        }));


        describe('Should check properties select2options', function () {
            it('Should check properties select2options.multiple', function () {
                expect(ngselect2Ctrl.select2options.multiple).not.toEqual(undefined);
                expect(ngselect2Ctrl.select2options.multiple).toEqual(true);
            });
            it('Should check properties select2options.minimumInputLength', function () {
                expect(ngselect2Ctrl.select2options.minimumInputLength).not.toEqual(undefined);
                expect(ngselect2Ctrl.select2options.minimumInputLength).toEqual(1);
            });
            it('Should check properties select2options.maximumInputLength', function () {
                expect(ngselect2Ctrl.select2options.maximumInputLength).not.toEqual(undefined);
                expect(ngselect2Ctrl.select2options.maximumInputLength).toEqual(10);
            });
            it('Should check properties select2options.placeholder', function () {
                expect(ngselect2Ctrl.select2options.placeholder).not.toEqual(undefined);
            });
        });
        describe('Should call Artist.query()', function () {
            it('Should call Ngselect2Ctrl.query()', function () {
                ngselect2Ctrl.search(results);
                expect(ArtistMock.query).toHaveBeenCalled();
            });
            it('Should call Ngselect2Ctrl.select2options.query()', function () {
                ngselect2Ctrl.select2options.query(results);
                expect(ArtistMock.query).toHaveBeenCalled();
            })
        });

        describe('Should check properties Ngselect2Ctrl.artists', function () {
            it('Check properties artists.id', function () {
                ngselect2Ctrl.search(results);
                expect(ngselect2Ctrl.artists[0].id).not.toEqual(undefined);
            });
            it('Check properties artists.text', function () {
                ngselect2Ctrl.search(results);
                expect(ngselect2Ctrl.artists[0].text).not.toEqual(undefined);
            });
        });

        describe('Should check length Ngselect2Ctrl.artists', function () {
            it('Should check length array by Ngselect2Ctrl.search()', function () {
                ngselect2Ctrl.search(results);
                expect(ngselect2Ctrl.artists.length).toEqual(5)
            });
            it('Should check length array by Ngselect2Ctrl.select2option.query()', function () {
                ngselect2Ctrl.select2options.query(results);
                expect(ngselect2Ctrl.artists.length).toEqual(5)
            });
        });


    })
})();
