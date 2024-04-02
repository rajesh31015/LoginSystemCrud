from rest_framework.response import Response
from rest_framework.decorators import api_view

def fetchCustomer() : 
    return Response({
        'message': 'fetched'
    })

def newCustomer() : 
    return Response({
        'message': 'new'
    })

def deleteCustomer() : 
    return Response({
        'message': 'delete'
    })

def updateCustomer() : 
    return Response({
        'message': 'update'
    })

@api_view(['GET','POST','PUT','DELETE'])
def result(req) : 
    if req.method == "GET" : return fetchCustomer()
    
    elif req.method == "POST" : return newCustomer()
    
    elif req.method == "PUT" : return updateCustomer()
    
    else : return deleteCustomer()