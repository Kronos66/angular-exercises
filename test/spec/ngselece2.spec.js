(function () {
    'use strict';
    describe('ngselect2App', function () {
        beforeEach(module('ngselect2App'));
        var ngselect2Ctrl;
        var ArtistMock;
        var data = [
            {id: 1, text: "Metal"},
            {id: 2, text: "Rock"},
            {id: 3, text: "Country"},
            {id: 4, text: "Hip-Hop"},
            {id: 5, text: "Reggea"}
        ];
        beforeEach(inject(function ($controller) {
            ArtistMock = jasmine.createSpyObj('Artist', ['query']);
            ArtistMock.query.andReturn({
                then: function (callback) {
                    callback(data);
                    return this;
                }
            });
            ngselect2Ctrl = $controller('Ngselect2Ctrl', {$resource: null, $scope: null, Artist: ArtistMock});
        }));
        describe('Should check properties', function () {
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
        describe('Should call Ngselect2Ctrl.search()', function () {
            ngselect2Ctrl.search();
            expect(ArtistMock.query).toHaveBeenCalledWith();
        })
    })
})();
