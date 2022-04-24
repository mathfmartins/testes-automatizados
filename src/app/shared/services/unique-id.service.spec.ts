import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;

  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}
      should generate id when called with prefix`, () => {
    const id = service.generatedUniqueIdWithPrefix('app-');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}
       should not duplicate IDs when called multiple times`, () => {
    const ids = new Set();
    for (let index = 0; index < 50; index++) {
      const id = service.generatedUniqueIdWithPrefix('app-');
      ids.add(id);
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
      should return number of IDs when called`, () => {
    service.generatedUniqueIdWithPrefix('app-');
    service.generatedUniqueIdWithPrefix('app-');
    service.generatedUniqueIdWithPrefix('app-');

    expect(service.getNumberOfGeneratedUniqueIds()).toBe(3);
  });

  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}
    should throw when called with empty`, () => {
      const emptyValues = ['', undefined, null] ;
      emptyValues.forEach(emptyValue => {
        expect(() => service.generatedUniqueIdWithPrefix(emptyValue))
        .withContext(`Empty value: ${emptyValue}`)
        .toThrow();
      })
    });
});
